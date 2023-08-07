import {MOUNTHS} from '../constant/constant.ts';

import {Offer, City} from '../types/offers.ts';

const humanizeDate = (date: string) => {
  const desiredDate = new Date(date);
  const desiredMonth = desiredDate.getMonth();

  return `${MOUNTHS[desiredMonth]} ${desiredDate.getFullYear()}`;
};

const getShortName = (name: string) => name.split(' ')[0];

const getOffersByCity = (offers: Offer[], city: string | undefined): Offer[] => offers.filter((offer) => offer.city.name === city);

const getSelectedCity = (selectedCity: string | undefined, cities: City[]): City | undefined => cities.find((item) => item.name === selectedCity);

const sortToHigh = (offers: Offer[]): Offer[] => {
  const curOffers = offers;

  return (
    curOffers.sort((a, b) => (a.price - b.price))
  );
};

const sortToLow = (offers: Offer[]): Offer[] => {
  const curOffers = offers;

  return (
    curOffers.sort((a, b) => (b.price - a.price))
  );
};

const sortTopRated = (offers: Offer[]): Offer[] => {
  const curOffers = offers;

  return (
    curOffers.sort((a, b) => (b.rating - a.rating))
  );
};

export {humanizeDate, getShortName, getOffersByCity, getSelectedCity, sortToHigh, sortToLow, sortTopRated};
