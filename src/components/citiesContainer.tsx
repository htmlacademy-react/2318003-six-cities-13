import {Offer, City} from '../types/offers.ts';

import {CardList} from './cardList.tsx';
import {Sorting} from './sorting.tsx';

import {Map} from './map.tsx';

type CitiesContainerProps = {
  selectedCityOffers: Offer[];
  selectedCity: City | undefined;
  handleCardListItemHover: (id: Offer['id'] | undefined) => void;
  selectedOffer: Offer | undefined;
  selectedSort: string | undefined;
}

function CitiesContainer ({selectedCityOffers, selectedCity, handleCardListItemHover, selectedOffer, selectedSort} : CitiesContainerProps) {
  if (selectedCityOffers.length) {
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          {selectedCity ? <b className="places__found">{`${selectedCityOffers.length} places to stay in ${selectedCity.name}`}</b> : ''}

          {<Sorting selectedSort = {selectedSort} selectedCityOffers = {selectedCityOffers}/>}

          {<CardList offers = {selectedCityOffers} onCardListItemHover = {handleCardListItemHover} isNearlyPlaceCard = {false}/>}

        </section>
        <div className="cities__right-section">
          {<Map city = {selectedCity} offers = {selectedCityOffers} selectedCard = {selectedOffer} isNearlyOffersMap = {false}/>}
        </div>
      </div>
    );
  }

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export {CitiesContainer};
