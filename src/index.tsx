import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {App} from './components/app.tsx';

import {store} from './store/store.ts';

import {fetchOffers} from './store/api-actions.ts';

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
