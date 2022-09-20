import styles from './Card.module.scss';
import React from 'react';

function Card({ id, title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          alt="unliked"
          src={
            isFavorite
              ? '/react-sneakers/img/liked.svg'
              : '/react-sneakers/img/unliked.svg'
          }
        />
      </div>
      <img width={133} height={112} alt="sneakers" src={imageUrl} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна: </span>
          <b>{price} грн.</b>
        </div>
        <div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            alt="plus"
            src={
              isAdded
                ? '/react-sneakers/img/btn-checked.svg'
                : '/react-sneakers/img/btn-plus.svg'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
