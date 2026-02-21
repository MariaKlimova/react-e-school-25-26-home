import type { Dish } from '../../types';
import { DishItem } from '../DishItem';
import './Menu.css';

interface MenuProps {
  dishes: Dish[];
  counts: Record<string, number>;
  onIncrement: (dishId: string) => void;
  onDecrement: (dishId: string) => void;
}

export function Menu({ dishes, counts, onIncrement, onDecrement }: MenuProps) {
  return (
    <div className="menu">
      <h3 className="menu-title">Menu</h3>
      <div className="menu-list">
        {dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            count={counts[dish.id] || 0}
            onIncrement={() => onIncrement(dish.id)}
            onDecrement={() => onDecrement(dish.id)}
          />
        ))}
      </div>
    </div>
  );
}
