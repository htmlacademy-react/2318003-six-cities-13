import {Offer} from '../types/offers.ts';

import {Link} from 'react-router-dom';

import {RATING_COEFFICIENT} from '../constant/constant.ts';

type FavoriteCardProps = {
  id: Offer['id'];
  title: Offer['title'];
  type: Offer['type'];
  price: Offer['price'];
  previewImage: Offer['previewImage'];
  isPremium: Offer['isPremium'];
  isFavorite: Offer['isFavorite'];
  rating: Offer['rating'];
}

function FavoriteCard({id, title, type, price, previewImage, isFavorite, isPremium, rating} : FavoriteCardProps) {

  return(
    <article className="favorites__card place-card">
      <div className={`place-card__mark ${isPremium ? '' : 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''}  button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * RATING_COEFFICIENT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export {FavoriteCard};
