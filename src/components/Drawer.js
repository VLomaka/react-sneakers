function Drawer({ onClose, onRemove, items = [] }) {
  console.log(items)
  return (
    <div className="overlay">

      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between ">Кошик
          <img onClick={onClose} className="remove cu-p" src="/react-sneakers/img/delete.svg" alt="close" />
        </h2>

        {
          items.length > 0 ? <div className="items flex">
            {
              items.map((obj) => (<div
                key={obj.id}
                className="cartItem d-flex align-center p-20 mb-20">
                <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="remove" src="/react-sneakers/img/delete.svg" alt="remove" />
              </div>))

            }
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Сума:</span>
                  <div></div>
                  <b>21 498 грн.</b>
                </li>
                <li>
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>1074 грн.</b>
                </li>
              </ul>

              <button className="greenButton">Оформити замовлення<img src="react-sneakers/img/arrow.svg" alt="arrow.svg" /></button>
            </div>
          </div> : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src="/react-sneakers/img/empty-cart.jpg" alt="cart-empty" />

            <h2>Кошик пустий</h2>
            <p className="opacity-6">Добавте хоч одну пару кросівок, щоб оформити замовлення.</p>
            <button onClick={onClose} className="greenButton">
              <img src="/react-sneakers/img/arrow.svg" alt="arrow" />
              Повернутись назад
            </button>
          </div>)
        }





      </div>
    </div>
  )
}

export default Drawer