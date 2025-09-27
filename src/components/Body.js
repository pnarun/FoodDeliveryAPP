import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // React state variable
  const [restaurantsList, setRestaurantsList] = useState(resList);

  let reslists = resList;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantsList.filter(
              (res) => res.avgRating > 4
            );
            setRestaurantsList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
