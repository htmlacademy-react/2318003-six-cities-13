import {Card} from './card.tsx';
import {Offer} from '../types/offers.ts';

type CardListProps = {
  cardsCount: number;
  offers: Offer[];
}

const cardsRender = (cardsCount: number, offers: Offer[]) => {
  const cards = [];
  for (let i = 0; i < cardsCount; i++) {
    cards.push(
      <Card
        id = {offers[i].id}
        title = {offers[i].title}
        type = {offers[i].type}
        price = {offers[i].price}
        previewImage = {offers[i].previewImage}
        isPremium = {offers[i].isPremium}
        isFavorite = {offers[i].isFavorite}
        rating = {offers[i].rating}
        key = {offers[i].id}
      />);
  }

  return cards;
};

function CardList ({cardsCount, offers} : CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">

      {cardsRender(cardsCount, offers)};

    </div>
  );
}

export {CardList};
