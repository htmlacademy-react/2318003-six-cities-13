import {createReducer} from '@reduxjs/toolkit';

import {offers} from '../mock/offers.ts';

import {CITIES} from '../constant/cities-constant.ts';

import {cityReplacement, offersFilling} from './action.ts';

import {getSelectedCity} from '../utils/utils.tsx';

const DEFAULT_CITY = getSelectedCity('Paris', CITIES);

const initialState = {
  city: DEFAULT_CITY,
  offers: offers
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityReplacement, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersFilling, (state) => {
      state.offers = offers;
    });
});

export {mainReducer};
