import {createAction} from '@reduxjs/toolkit';

import {Offer, City} from '../types/offers.ts';
import {ReviewType} from '../types/review.ts';

const changeCity = createAction('/changeCity', (city: City) => ({payload: city}));

const loadOffers = createAction('/loadOffers', (offers: Offer[]) => ({payload: offers}));

const changeSortType = createAction('/changeSortType', (sort: string) => ({payload: sort}));

const changeSortListState = createAction('/changeSortListState', (sortListState: string) => ({payload: sortListState}));

const loadOffer = createAction('/loadOffer', (offer: Offer) => ({payload: offer}));

const loadOfferReviews = createAction('/loadOfferReviews', (offerReview: ReviewType[]) => ({payload: offerReview}));

const setActiveOfferId = createAction('/setActiveOfferId', (activeOfferId: string) => ({payload: activeOfferId}));

const setOfferStatus = createAction('/setOfferStatus', (offerStatus: boolean) => ({payload: offerStatus}));

export {
  changeCity,
  loadOffers,
  changeSortType,
  changeSortListState,
  loadOffer,
  loadOfferReviews,
  setActiveOfferId,
  setOfferStatus
};
