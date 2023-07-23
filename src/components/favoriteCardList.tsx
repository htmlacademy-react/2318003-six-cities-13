import {FavoriteCard} from './favoriteCard';

import {Offer} from '../types/offers.ts';

type FavoriteCardListProps = {
  favoriteOffersByCities: Offer[];
  city: string;
}

function FavoriteCardList({favoriteOffersByCities, city}: FavoriteCardListProps) {
  if(!favoriteOffersByCities.length){
    return null;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {favoriteOffersByCities.map((offer) => (
          <FavoriteCard
            key = {offer.id}
            title = {offer.title}
            type = {offer.type}
            price = {offer.price}
            previewImage = {offer.previewImage}
            isPremium = {offer.isPremium}
            isFavorite = {offer.isFavorite}
            rating = {offer.rating}
          />
        ))}
      </div>
    </li>
  );
}

export {FavoriteCardList};
