import { Link, useOutletContext } from 'react-router';
import type { Restaurant } from '../../types';
import './ReviewList.css';

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </span>
  );
}

export function ReviewList() {

  const { activeRestaurant } = useOutletContext<{ activeRestaurant: Restaurant }>();

  const reviews = activeRestaurant.reviews;

  return (
    <>
      <div className="review-list">
        <h3 className="reviews-title">Reviews</h3>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <span className="review-user">{review.user}</span>
                <StarRating rating={review.rating} />
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

      </div>
      <Link to=".." className="back-to-menu-link">
        Back to menu
      </Link>
    </>
  );
}
