import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {State, AppDispatch} from '../types/state.ts';
import {Offer} from '../types/offers.ts';

import {loadOffers, setOfferStatus, loadOffer} from './action.ts';

import {APIRoute} from '../constant/constant.ts';

const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  }
);

const fetchOffer = createAsyncThunk<void, {id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async ({id}, {dispatch, extra: api }) => {
    dispatch(setOfferStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
    const {data} = await api.get<Offer>(url);
    dispatch(setOfferStatus(false));
    dispatch(loadOffer(data));
  }
);

export {fetchOffers, fetchOffer};
