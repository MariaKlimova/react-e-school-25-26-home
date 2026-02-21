import type { Dish } from '../../types';
import './DishItem.css';

interface DishItemProps {
  dish: Dish;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function DishItem({ dish, count, onIncrement, onDecrement }: DishItemProps) {
  return (
    <div className="dish-item">
      <div className="dish-info">
        <span className="dish-name">{dish.name}</span>
        <span className="dish-price">${dish.price}</span>
        <span className="dish-ingredients">{dish.ingredients.join(', ')}</span>
      </div>
      <div className="dish-counter">
        <button 
          className="counter-btn" 
          onClick={onDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <span className="counter-value">{count}</span>
        <button 
          className="counter-btn" 
          onClick={onIncrement}
          disabled={count === 5}
        >
          +
        </button>
      </div>
    </div>
  );
}
