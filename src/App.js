function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-30 d-flex justify-between ">Кошик
            <img className="remove cu-p" src="/react-sneakers/img/delete.svg" alt="remove" />
          </h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center p-20 mb-20">
              <img className="mr-20" width={70} height={70} src="/react-sneakers/img/1sneakers.jpg" alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Чоловічі Кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img className="remove" src="/react-sneakers/img/delete.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center p-20 mb-20">
              <img className="mr-20" width={70} height={70} src="/react-sneakers/img/1sneakers.jpg" alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Чоловічі Кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img className="remove" src="/react-sneakers/img/delete.svg" alt="remove" />
            </div>

          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Сума:</span>
                <div></div>
                <b>21 498 грн.</b>
              </li>
              <li>
                <span>Падаток 5%:</span>
                <div></div>
                <b>1074 грн.</b>
              </li>
            </ul>

            <button className="greenButton">Оформити замовлення<img src="react-sneakers/img/arrow.svg" alt="arrow.svg" /></button>
          </div>
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex aling-center">
          <img width={40} height={40} alt="sneakers-logo" src="/react-sneakers/img/logo.png" />
          <div>
            <h3 className="text-uppercasea">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} alt="cart" src="/react-sneakers/img/cart.svg" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img alt='user' src="/react-sneakers/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Колекція кросівок</h1>
          <div className="search-block d-flex">
            <img width={14} src="/react-sneakers/img/search.svg" alt="search" />
            <input placeholder="Пошук..." />
          </div>

        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img alt="unliked" src="/react-sneakers/img/heart-unliked.svg" />
            </div>
            <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/1sneakers.jpg" />
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/2sneakers.jpg" />
            <h5>Чоловічі Кросівки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/3sneakers.jpg" />
            <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>8 499 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} alt="sneakers" src="/react-sneakers/img/4sneakers.jpg" />
            <h5>Кросівки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>8 999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
