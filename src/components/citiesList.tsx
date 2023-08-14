import {City} from '../types/offers.ts';

import {useAppDispatch} from '../hooks/index.ts';

import {changeCity} from '../store/action.ts';

import {CITIES} from '../constant/cities-constant.ts';

import {Link} from 'react-router-dom';

import {PageLinks} from '../constant/constant.ts';

type CitiesListProps = {
  selectedCity: City | undefined;
}

function CitiesList ({selectedCity}: CitiesListProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city.name} className="locations__item" onClick={() => {
          dispatch(changeCity(city));
        }}
        >
          <Link className={`${city.name === selectedCity?.name ? 'tabs__item--active' : 'tabs__item--disable'} locations__item-link tabs__item`} to={PageLinks.Main}>
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export {CitiesList};
