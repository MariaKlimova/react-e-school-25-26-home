import { RestaurantTabs } from "../../components/RestaurantTabs";
import { Outlet } from "react-router";
import './RestaurantsLayout.css';

export function RestaurantsLayout() {

  return (
    <div className="restaurants-layout">
        <h1 className="restaurants-layout-title">Restaurants</h1>
        <RestaurantTabs />

        <Outlet />
    </div>
  );
}