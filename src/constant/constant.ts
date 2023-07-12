const CardProperty = {
  cardsCount: 4,
};

const PageLinks = {
  main: '/',
  login: '/login',
  favorites: '/favorites',
  offer: '/offer/:id'
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {CardProperty, PageLinks, AuthorizationStatus};
