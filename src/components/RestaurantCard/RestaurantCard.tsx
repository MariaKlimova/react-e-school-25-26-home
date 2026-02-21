import type { Restaurant } from '../../types';
import { Menu } from '../Menu';
import { ReviewList } from '../ReviewList';
import './RestaurantCard.css';

interface RestaurantCardProps {
  restaurant: Restaurant;
  counts: Record<string, number>;
  onIncrement: (dishId: string) => void;
  onDecrement: (dishId: string) => void;
}

export function RestaurantCard({ 
  restaurant, 
  counts, 
  onIncrement, 
  onDecrement 
}: RestaurantCardProps) {
  return (
    <div className="restaurant-card">
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <Menu
        dishes={restaurant.menu}
        counts={counts}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <ReviewList reviews={restaurant.reviews} />
    </div>
  );
}
