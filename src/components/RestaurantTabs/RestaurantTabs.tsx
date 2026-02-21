import type { Restaurant } from '../../types';
import './RestaurantTabs.css';

interface RestaurantTabsProps {
  restaurants: Restaurant[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export function RestaurantTabs({ restaurants, activeId, onSelect }: RestaurantTabsProps) {
  return (
    <div className="restaurant-tabs">
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          className={`tab-button ${activeId === restaurant.id ? 'active' : ''}`}
          onClick={() => onSelect(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
