import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {State, AppDispatch} from '../types/state.ts';
import {Offer} from '../types/offers.ts';

import {fillingOffers} from './action.ts';

import {APIRoute} from '../constant/constant.ts';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(fillingOffers(data));
  }
);

/* const fetchOfferAction = createAsyncThunk<void, {id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async ({ id }, { dispatch, extra: api }) => {
    dispatch(setOfferLoadingStatus(true));
    const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
    const {data} = await api.get<FullOfferType>(url);
    dispatch(setOfferLoadingStatus(false));
    dispatch(loadOffer(data));
  }
); */

export {fetchOffersAction};
