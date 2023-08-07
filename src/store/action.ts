import {createAction} from '@reduxjs/toolkit';

import {Offer} from '../types/offers.ts';

import {City} from '../types/offers.ts';

const changeCity = createAction('/changeCity', (city: City) => ({payload: city}));

const fillingOffers = createAction('/fillingOffers', (offers: Offer[]) => ({payload: offers}));

const changeSortType = createAction('/changeSortType', (sort: string) => ({payload: sort}));

const changeSortListState = createAction('/changeSortListState', (sortListState: string) => ({payload: sortListState}));

export {changeCity, fillingOffers, changeSortType, changeSortListState};
