import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  else console.log(resInfo);
  return (
    <div>
      <h2>Name of the Restaurant</h2>
      <h4>Menu</h4>
      <ul>
        {resInfo.data.map((item) => (
          <li key={item.Id}>{item.Items} - {"Rs."}{item.Price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
