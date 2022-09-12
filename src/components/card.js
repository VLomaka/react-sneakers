function Card() {
    return (
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
    )
}

export default Card;