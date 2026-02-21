import { useState } from 'react';
import { DishItem } from '../DishItem';
import './Menu.css';
import { Link, useOutletContext } from 'react-router';
import type { Restaurant } from '../../types';

export function Menu() {
  const [dishCounts, setDishCounts] = useState<Record<string, number>>({});
  const { activeRestaurant } = useOutletContext<{ activeRestaurant: Restaurant }>();    

  const dishes = activeRestaurant.menu;
  
  const handleIncrement = (dishId: string) => {
    setDishCounts((prev) => {
      const currentCount = prev[dishId] || 0;
      if (currentCount >= 5) return prev;
      return { ...prev, [dishId]: currentCount + 1 };
    });
  };

  const handleDecrement = (dishId: string) => {
    setDishCounts((prev) => {
      const currentCount = prev[dishId] || 0;
      if (currentCount <= 0) return prev;
      return { ...prev, [dishId]: currentCount - 1 };
    });
  };

  return (
    <>
    <div className="menu">
      <h3 className="menu-title">Menu</h3>
      <div className="menu-list">
        {dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            count={dishCounts[dish.id] || 0}
            onIncrement={() => handleIncrement(dish.id)}
            onDecrement={() => handleDecrement(dish.id)}
          />
        ))}
      </div>
    </div>
    <Link to="reviews" className="review-link">
        View reviews
    </Link>
    </>
  );
}
