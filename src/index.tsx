import React from 'react';
import ReactDOM from 'react-dom/client';

import {offers} from './mock/offers.ts';
import {reviews} from './mock/reviews.ts';

import {App} from './components/app.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} reviews = {reviews}/>
  </React.StrictMode>
);
