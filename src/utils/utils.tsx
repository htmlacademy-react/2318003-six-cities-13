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

export {humanizeDate, getShortName, getOffersByCity, getSelectedCity};
