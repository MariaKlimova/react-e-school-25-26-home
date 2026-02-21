import { useState } from 'react';
import { restaurants } from './mocks/mockRestaurants';
import { RestaurantTabs } from './components/RestaurantTabs';
import { RestaurantCard } from './components/RestaurantCard';
import './App.css';

function App() {
  const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(null);
  const [dishCounts, setDishCounts] = useState<Record<string, number>>({});

  const activeRestaurant = restaurants.find((r) => r.id === activeRestaurantId);

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
    <div className="app">
      <h1 className="app-title">Restaurants</h1>
      <RestaurantTabs
        restaurants={restaurants}
        activeId={activeRestaurantId}
        onSelect={setActiveRestaurantId}
      />
      {activeRestaurant && (
        <RestaurantCard
          restaurant={activeRestaurant}
          counts={dishCounts}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
      {!activeRestaurant && (
        <p className="select-hint">Select a restaurant to view its menu and reviews</p>
      )}
    </div>
  );
}

export default App;
