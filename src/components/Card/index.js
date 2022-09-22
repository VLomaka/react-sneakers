import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import React from 'react';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false,
  loading = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {
        loading ?
          <ContentLoader
            speed={2}
            width={900}
            height={400}
            viewBox="0 0 900 400"
            backgroundColor="#fafafa"
            foregroundColor="#c4c4c4"
          >
            <rect x="0" y="0" rx="11" ry="11" width="150" height="90" />
            <rect x="49" y="131" rx="0" ry="0" width="0" height="1" />
            <rect x="0" y="140" rx="4" ry="4" width="93" height="15" />
            <rect x="112" y="170" rx="10" ry="10" width="32" height="32" />
            <rect x="0" y="116" rx="5" ry="5" width="150" height="15" />
            <rect x="0" y="175" rx="9" ry="9" width="80" height="24" />
          </ContentLoader> : (
            <>
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
              </div></>
          )
      }

    </div>
  );
}

export default Card;