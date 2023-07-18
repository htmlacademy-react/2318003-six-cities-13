enum CardProperty {
  CardsCount = 4,
}

enum PageLinks {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {CardProperty, PageLinks, AuthorizationStatus};
