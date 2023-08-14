import {createAction} from '@reduxjs/toolkit';

import {Offer, City} from '../types/offers.ts';
import {ReviewType} from '../types/review.ts';

const changeCity = createAction('/changeCity', (city: City) => ({payload: city}));

const fillingOffers = createAction('/fillingOffers', (offers: Offer[]) => ({payload: offers}));

const changeSortType = createAction('/changeSortType', (sort: string) => ({payload: sort}));

const changeSortListState = createAction('/changeSortListState', (sortListState: string) => ({payload: sortListState}));

const loadOffers = createAction('/loadOffers', (offers: Offer[]) => ({payload: offers}));

const loadOfferReviews = createAction('/loadOfferReviews', (offerReview: ReviewType[]) => ({payload: offerReview}));

export {changeCity, fillingOffers, changeSortType, changeSortListState, loadOffers, loadOfferReviews};
