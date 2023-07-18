import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {MainPage} from '../pages/main-page.tsx';
import {LoginPage} from '../pages/login-page.tsx';
import {FavoritesPage} from '../pages/favorites-page.tsx';
import {OfferPage} from '../pages/offer-page.tsx';
import {ErrorPage} from '../pages/error-page.tsx';
import {PrivateRoute} from './private-route.tsx';

import {PageLinks, AuthorizationStatus} from '../constant/constant.ts';

type AppProps = {
  cardsCount: number;
}

function App({cardsCount} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {PageLinks.Main}
          element = {<MainPage cardsCount = {cardsCount}/>}
        />
        <Route
          path = {PageLinks.Login}
          element = {<LoginPage />}
        />
        <Route
          path = {PageLinks.Favorites}
          element = {
            <PrivateRoute authorizationStatus = {AuthorizationStatus.NotAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path = {PageLinks.Offer}
          element = {<OfferPage />}
        />
        <Route
          path = '*'
          element = {<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
