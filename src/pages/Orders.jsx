import axios from "axios";
import React from "react";
import Card from '../components/Card'
import AppContext from "../context";

function Orders() {
  const { onAddToCart, onAddToFavorite, isLoading } = React.useContext(AppContext)
  const [orders,setOrders] = React.useState([])

  React.useEffect(() => {
    ( async () => {
      try {
        const {data} = await axios.get('https://6323470d362b0d4e7de06fcd.mockapi.io/orders')
      setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []))
      } catch (error) {
        console.log(error);
      }
    }) () 
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Заказі</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders.filter((item) => item.title.toLowerCase())).map((item, index) => (
          <Card 
          key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          loading={isLoading}
          {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders