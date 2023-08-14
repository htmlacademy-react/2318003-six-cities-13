import {createReducer} from '@reduxjs/toolkit';

import {CITIES} from '../constant/cities-constant.ts';
import {SortType, SortListState} from '../constant/constant.ts';

import {
  changeCity,
  loadOffers,
  changeSortType,
  changeSortListState,
  loadOffer,
  setActiveOfferId,
  setOfferStatus
} from './action.ts';

import {getSelectedCity} from '../utils/utils.tsx';

import {Offer, City} from '../types/offers.ts';
import {ReviewType} from '../types/review.ts';

const DEFAULT_CITY = getSelectedCity('Paris', CITIES);
const DEFAULT_SORT: string = SortType.Popular;
const DEFAULT_SORT_LIST_STATE: string = SortListState.Closed;

export type InitialState = {
  city: City | undefined;
  offers: Offer[];
  activeOffer: Offer | null;
  activeOfferId: string | null;
  sort: string;
  sortListState: string;
  offerReviews: ReviewType[];
  isOfferLoad: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  activeOffer: null,
  activeOfferId: null,
  sort: DEFAULT_SORT,
  sortListState: DEFAULT_SORT_LIST_STATE,
  offerReviews: [],
  isOfferLoad: false
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortListState, (state, action) => {
      state.sortListState = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setOfferStatus, (state, action) => {
      state.isOfferLoad = action.payload;
    });
});

export {mainReducer};
