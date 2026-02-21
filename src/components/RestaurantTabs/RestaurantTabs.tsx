import { NavLink } from 'react-router';
import { restaurants } from '../../mocks/mockRestaurants';
import './RestaurantTabs.css';

export function RestaurantTabs() {
  return (
    <div className="restaurant-tabs">
      {restaurants.map((restaurant) => (
        <NavLink
          key={restaurant.id}
          to={`/restaurants/${restaurant.id}`}
          className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
        >
          {restaurant.name}
        </NavLink>
      ))}
    </div>
  );
}
