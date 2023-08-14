import {useParams, Navigate} from 'react-router-dom';

import {useState} from 'react';

import {Offer} from '../types/offers';

import {Header} from '../components/header.tsx';
import {CommentForm} from '../components/commentForm.tsx';
import {ReviewsList} from '../components/reviewsList.tsx';
import {Map} from '../components/map.tsx';
import {CardList} from '../components/cardList.tsx';

import {PageLinks, RATING_COEFFICIENT, CITY} from '../constant/constant.ts';

import {useAppSelector} from '../hooks/index.ts';

import {getStateOffers, getStateOfferReview} from '../selectors/selectors.ts';

const findBedroom = (bedrooms : number) : string => {
  if (bedrooms === 1) {
    return `${bedrooms} Bedroom`;
  }

  return `${bedrooms} Bedrooms`;
};

function OfferPage() {
  const offers = useAppSelector(getStateOffers);
  const currentOfferId = useParams();
  const currentOffer = offers.find((offer) => offer.id === currentOfferId.id);
  const reviews = useAppSelector(getStateOfferReview);
  const currentOfferReviews = reviews.filter((review) => review.id === currentOfferId.id);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleCardListItemHover = (id: Offer['id'] | undefined) => {
    if (!id) {
      setSelectedOffer(undefined);
    }
    const curOffer = offers.find((offer) =>
      offer.id === id,
    );
    setSelectedOffer(curOffer);
  };

  const [state, setState] = useState(currentOffer);

  if (state === undefined) {
    return <Navigate to={PageLinks.NotFound} />;
  }

  const {bedrooms, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = state;

  const handleChange = () => {
    setState({
      ...state,
      isFavorite: !isFavorite
    });
  };

  return (
    <div className="page">
      {<Header />}

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((pic) => <div className="offer__image-wrapper" key = {pic}><img className="offer__image" src={pic} alt="Photo studio"/></div>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className= {`offer__mark ${isPremium ? '' : 'visually-hidden'}`}>
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={`offer__bookmark-button ${isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button" onClick = {handleChange} >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${rating * RATING_COEFFICIENT}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {findBedroom(bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => <li className="offer__inside-item" key = {good}>{good}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className= {`offer__user-status ${host.isPro ? '' : 'visually-hidden'}`}>
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentOfferReviews.length}</span></h2>
                <ul className="reviews__list">
                  {<ReviewsList reviews = {currentOfferReviews}/>}
                </ul>
                {<CommentForm />}
              </section>
            </div>
          </div>
          {<Map city = {CITY} offers = {offers} selectedCard = {selectedOffer} isNearlyOffersMap/>}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {<CardList offers = {offers} onCardListItemHover = {handleCardListItemHover} isNearlyPlaceCard/>}
          </section>
        </div>
      </main>
    </div>
  );
}

export {OfferPage};
