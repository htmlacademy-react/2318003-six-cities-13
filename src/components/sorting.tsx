import {useAppDispatch} from '../hooks/index.ts';

import {SortType} from '../constant/constant.ts';

import {fillingOffers, changeSortType} from '../store/action.ts';

import {useState, KeyboardEvent} from 'react';

import {sortToHigh, sortToLow, sortTopRated} from '../utils/utils.tsx';

import {Offer} from '../types/offers.ts';

type SortingProps = {
  selectedSort: string | undefined;
  selectedCityOffers: Offer[];
}

function Sorting ({selectedSort, selectedCityOffers}: SortingProps) {
  const [isOpen, setIsOpen] = useState(false);

  function keyDownHandler(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  function typeClickHandler() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const dispatch = useAppDispatch();

  const changeSortTypeHandle = (sort: string) => {
    setIsOpen(false);
    switch (sort) {
      case SortType.PriceToHigh:
        dispatch(changeSortType(SortType.PriceToHigh));
        dispatch(fillingOffers(sortToHigh(selectedCityOffers)));
        break;
      case SortType.PriceToLow:
        dispatch(changeSortType(SortType.PriceToLow));
        dispatch(fillingOffers(sortToLow(selectedCityOffers)));
        break;
      case SortType.TopRated:
        dispatch(changeSortType(SortType.TopRated));
        dispatch(fillingOffers(sortTopRated(selectedCityOffers)));
        break;
      default:
        dispatch(changeSortType(SortType.Popular));
        dispatch(fillingOffers(selectedCityOffers));
        break;
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown = {keyDownHandler}>
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick = {() => {
          typeClickHandler();
        }}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className = {isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {Object.values(SortType).map((sort) => (
          <li key={sort} className="places__option places__option--active" tabIndex={0} onClick = {
            () => changeSortTypeHandle(sort)
          }
          >{sort}
          </li>
        ))}
      </ul>
    </form>);
}

export {Sorting};
