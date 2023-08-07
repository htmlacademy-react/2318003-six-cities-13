import {City, Offer} from '../types/offers.ts';

type SelectedCityProps = {
  city: City | undefined;
  offers: Offer[];
  sort: string;
  sortListState: string;
}

const getStateCity = (state : SelectedCityProps) => state.city;

const getStateOffers = (state : SelectedCityProps) => state.offers;

const getStateSort = (state : SelectedCityProps) => state.sort;

export {getStateCity, getStateOffers, getStateSort};
