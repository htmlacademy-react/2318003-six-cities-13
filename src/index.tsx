import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {offers} from './mock/offers.ts';
import {reviews} from './mock/reviews.ts';

import {App} from './components/app.tsx';

import {store} from './store/store.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers = {offers} reviews = {reviews}/>
    </Provider>
  </React.StrictMode>
);
