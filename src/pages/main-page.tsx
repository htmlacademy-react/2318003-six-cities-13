import {useState} from 'react';

import {Offer} from '../types/offers';

import {Header} from '../components/header.tsx';
import {CitiesList} from '../components/citiesList.tsx';
import {CitiesContainer} from '../components/citiesContainer.tsx';

import {useAppSelector} from '../hooks/index.ts';

import {getOffersByCity} from '../utils/utils.tsx';

function MainPage() {
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(offers, selectedCity?.name);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleCardListItemHover = (id: Offer['id'] | undefined) => {
    if (!id) {
      setSelectedOffer(undefined);
    }
    const currentOffer = offers.find((offer) =>
      offer.id === id,
    );
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      {<Header />}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {<CitiesList selectedCity = {selectedCity}/>}
            </ul>
          </section>
        </div>
        <div className="cities">
          {<CitiesContainer selectedCityOffers = {selectedCityOffers} selectedCity = {selectedCity} handleCardListItemHover = {handleCardListItemHover} selectedOffer = {selectedOffer}/>}
        </div>
      </main>
    </div>
  );
}

export {MainPage};
