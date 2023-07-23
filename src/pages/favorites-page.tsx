import {Offer} from '../types/offers.ts';

import {FavoriteCardList} from '../components/favoriteCardList.tsx';
import {Header} from '../components/header.tsx';

import {CITIES} from '../constant/constant.ts';

type FavoritesPageProps = {
  favoriteOffers: Offer[];
}

function FavoritesPage({favoriteOffers} : FavoritesPageProps) {
  const favoriteOffersByCities: Record<string, Offer[]> = {
    Paris: [],
    Cologne: [],
    Brussels: [],
    Amsterdam: [],
    Hamburg: [],
    Dusseldorf: [],
  };

  const filterPlacesPerCities = () => {
    favoriteOffers.forEach((favoriteOffer) => {
      favoriteOffersByCities[favoriteOffer.city.name].push(favoriteOffer);
    });
  };

  filterPlacesPerCities();

  return(
    <div className="page">
      {<Header />}

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => (
                <FavoriteCardList
                  favoriteOffersByCities = {favoriteOffersByCities[city]}
                  city = {city}
                  key = {city}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export {FavoritesPage};
