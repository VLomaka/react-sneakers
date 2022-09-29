import React from "react";
import Info from "./Info";
import axios from "axios";
import {useCart} from '../hooks/useCart'

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = React.useState(null)
const [isOrderComplete, setIsOrderComplete] = React.useState(false)
const [isLoading, setIsLoading] = React.useState(false)


const onClickOrder = async () => {
 try {
  setIsLoading(true)
  const {data} = await axios.post('https://6323470d362b0d4e7de06fcd.mockapi.io/orders' , {
    items: cartItems
  })
  await axios.put('https://6323470d362b0d4e7de06fcd.mockapi.io/cart', [])
  setOrderId(data.id)
  setIsOrderComplete(true)
  setCartItems([]) 
 } catch (error) {
  console.log(error)
 }
 setIsLoading(false)
}

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="/react-sneakers/img/btn-remove.svg" alt="Close" />
        </h2>



        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/react-sneakers/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice/100*5} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder}  className="greenButton">
                Оформить заказ <img src="/react-sneakers/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :"Добавьте хотя бі одну пару кроссовок, чтобі оформить заказ"}  image={isOrderComplete ? '/react-sneakers/img/complete-order.jpg' :"/react-sneakers/img/empty-cart.jpg" } />
        )}
      </div>
    </div>
  );
}

export default Drawer;
