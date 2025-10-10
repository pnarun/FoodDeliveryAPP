import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useOnlineStatus from "../utils/useOlineStatus";

const Body = () => {
  const customGoogleSheetsUrl =
    "https://script.google.com/macros/s/AKfycbwSQ9MN73kxdfze-ZCmg_bEi3MwO6c9b4HKl3JCktm7s0ciCZa_9_8XJ2ndQYxcpLCi/exec";
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
    // const data = await fetch(customGoogleSheetsUrl);
    // const jsonData = await data.json();
    // console.log(data);
    // console.log(jsonData);
    // try {
    //   const response = await axios.get(customGoogleSheetsUrl);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  //   async function fetchData() {
  //   try {
  //     const response = await axios.get('https://api.example.com/data');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return (<h1>It seems you are offline. Please check you Internet connection.</h1>)

  let reslists = resList;
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 py-1.5 bg-blue-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
          className="px-4 py-2 bg-blue-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link key={restaurant.resId} to={"/restaurants/" + restaurant.resId}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
