import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const swiggyApiUrl =
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9174154&lng=77.4857894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    "https://swiggy-api-4c740.web.app/swiggy-api.json";

  // React state variable
  const [restaurantsList, setRestaurantsList] = useState(resList);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const payload = new URLSearchParams();
  payload.append("lat", 12.9174154);
  payload.append("lng", 77.4857894);

  const corsData = {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchData = async () => {
    // const data = await fetch(
    //   // "https://corsproxy.io/?url=" +
    //   // "https://go.x2u.in/proxy?email=1si17is007@sit.ac.in&apiKey=c924a567&url=" +
    //     swiggyApiUrl
    //   // ,{ payload }
    // );
    const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    const jsonData = await data.json();
    console.log(data);
    console.log(jsonData);
  };

  let reslists = resList;
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // Filter the restaurant crads and update UI

              const filteredList = restaurantsList.filter((res) => {
                res.resName.toLowerCase().includes(searchText.toLowerCase());
              });
              setRestaurantsList(filteredList);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
