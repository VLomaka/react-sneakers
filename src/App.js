function App() {
  return (
  <div className="wrapper clear ">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex aling-center">
      <img width={40} height={40} alt="sneakers-logo" src={"/react-sneakers/img/logo.png"} />
        <div>
          <h3 className="text-uppercasea">React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width={18} height={18} alt="cart" src={"/react-sneakers/img/cart.svg"} />
          <span>1205 грн.</span>
        </li>
        <li>
        <img alt='user' src="/react-sneakers/img/user.svg" />
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Усі кросівки</h1>
      
      <div className="d-flex"><div className="card">
      <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/1sneakers.jpg" />
      <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна: </span>
          <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg"/>
        </button>
      </div>
     </div><div className="card">
      <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/2sneakers.jpg" />
      <h5>Чоловічі Кросівки Nike Air Max 270</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна: </span>
          <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg"/>
        </button>
      </div>
     </div><div className="card">
      <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/3sneakers.jpg" />
      <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна: </span>
          <b>8 499 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg"/>
        </button>
      </div>
     </div><div className="card">
      <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/4sneakers.jpg" />
      <h5>Кросівки Puma X Aka Boku Future Rider</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна: </span>
          <b>8 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg"/>
        </button>
      </div>
     </div>
     </div>
    </div>
 </div>
  );
}

export default App;
