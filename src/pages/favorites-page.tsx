import {Offer} from '../types/offers.ts';

import {FavoriteCardList} from '../components/favoriteCardList.tsx';
import {Header} from '../components/header.tsx';

import {CITIES} from '../constant/cities-constant.ts';

import {useAppSelector} from '../hooks/index.ts';

import {getStateOffers} from '../selectors/selectors.ts';

function FavoritesPage() {
  const offers = useAppSelector(getStateOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
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
              {
                Object.values(CITIES).map((city) => (
                  <FavoriteCardList
                    favoriteOffersByCities = {favoriteOffersByCities[city.name]}
                    city = {city.name}
                    key = {city.name}
                  />
                ))
              }

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
