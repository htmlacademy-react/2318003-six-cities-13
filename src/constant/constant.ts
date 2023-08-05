enum CardProperty {
  CardsCount = 4,
}

enum PageLinks {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const RATING_COEFFICIENT = 20;

const RATINGS = [
  { value: '5', id: '5-stars', title: 'perfect' },
  { value: '4', id: '4-stars', title: 'good' },
  { value: '3', id: '3-stars', title: 'not bad' },
  { value: '2', id: '2-stars', title: 'badly' },
  { value: '1', id: '1-star', title: 'terribly' }
] as const;

const CITY = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12
  }
} as const;

const URL_MARKER_DEFAULT =
  '../img/pin.svg';

const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

const MOUNTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const;


export {CardProperty, PageLinks, AuthorizationStatus, RATING_COEFFICIENT, RATINGS, CITY, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MOUNTHS};
