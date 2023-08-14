import {configureStore} from '@reduxjs/toolkit';

import {mainReducer} from './reducer.ts';

import {createAPI} from '../api/api.ts';

const api = createAPI();

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export {store};
