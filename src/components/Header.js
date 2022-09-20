import { Link } from 'react-router-dom';


function Header(props) {
    return (

        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex aling-center">
                    <img width={40} height={40} src="react-sneakers/img/logo.png" alt="logo" />
                    <div>
                        <h3 className="text-uppercasea">React Sneakers</h3>
                        <p className="opacity-5">Магазин найкращих кросівок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} alt="cart" src="/react-sneakers/img/cart.svg" />
                    <span>1205 грн.</span>
                </li>
                <li className="mr-10">
                    <Link to="/favorites">
                        <img src="react-sneakers/img/heart.svg" alt="heart" />
                    </Link>
                </li>
                <li>
                    <img alt='user' src="/react-sneakers/img/user.svg" />
                </li>
            </ul>
        </header>

    )
}

export default Header;