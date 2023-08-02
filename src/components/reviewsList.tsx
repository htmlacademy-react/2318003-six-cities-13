import {Review} from './review.tsx';

import {ReviewType} from '../types/review.ts';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList ({reviews} : ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          date = {review.date}
          user = {review.user}
          comment = {review.comment}
          rating = {review.rating}
          key = {`${review.id} + ${review.user.name}`}
        />
      ))}
    </ul>
  );
}

export {ReviewsList};
