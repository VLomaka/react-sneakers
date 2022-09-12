function Drawer() {
    return (
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
    )
}

export default Drawer