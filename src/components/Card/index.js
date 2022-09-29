import React from 'react';
import ContentLoader from "react-content-loader"

import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false
}) {
  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {
        loading ? <ContentLoader
          speed={1}
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
        </ContentLoader> : <> <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? '/react-sneakers/img/liked.svg' : '/react-sneakers/img/unliked.svg'} alt="Unliked" />
        </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            { onPlus &&<img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? '/react-sneakers/img/btn-checked.svg' : '/react-sneakers/img/btn-plus.svg'}
              alt="Plus"
            />}
          </div></>
      }

    </div>
  );
}

export default Card;
