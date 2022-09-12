function Header() {
    return (

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

    )
}

export default Header;