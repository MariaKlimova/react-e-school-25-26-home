import { useParams } from "react-router";
import { restaurants } from "../../mocks/mockRestaurants";
import { Outlet } from "react-router";
import './RestaurantLayout.css';

export function RestaurantLayout() {

    const { id } = useParams();

    const activeRestaurant = restaurants.find((r) => r.id === id);

    if (!activeRestaurant) {
        return <div>Restaurant not found</div>;
    }

    return (
        <div className="restaurant-card">
            <h2 className="restaurant-name">{activeRestaurant.name}</h2>
            <Outlet context={{ activeRestaurant }}/>
      </div>
    );
}