import cardStyles from './Card.module.scss'

function Card(props) {
    const onClickButton = () => { alert('Plus active') }

    return (
        <div className={cardStyles.card}>
            <div className="favorite">
                <img alt="unliked" src="/react-sneakers/img/heart-unliked.svg" />
            </div>
            <img width={133} height={112} alt="sneakers" src={props.imageUrl} />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна: </span>
                    <b>{props.price} грн.</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} alt="plus" src="/react-sneakers/img/plus.svg" />
                </button>
            </div>
        </div>
    )
}

export default Card;