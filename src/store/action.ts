import {createAction} from '@reduxjs/toolkit';

import {City} from '../types/offers.ts';

const cityReplacement = createAction('/changeCity', (city: City) => ({payload: city}));

const offersFilling = createAction('/fillingOffers');

export {cityReplacement, offersFilling};
