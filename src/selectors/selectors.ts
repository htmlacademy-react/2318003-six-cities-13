import {InitialState} from '../store/reducer.ts';

const getStateCity = (state : InitialState) => state.city;

const getStateOffers = (state : InitialState) => state.offers;

const getStateSort = (state : InitialState) => state.sort;

const getStateOfferReview = (state : InitialState) => state.offerReviews;

const getStateActiveOffer = (state : InitialState) => state.activeOffer;

const isOfferLoad = (state : InitialState) => state.isOfferLoad;

export {
  getStateCity,
  getStateOffers,
  getStateSort,
  getStateOfferReview,
  getStateActiveOffer,
  isOfferLoad
};
