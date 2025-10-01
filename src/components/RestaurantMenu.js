import { useState, useEffect } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();

  // State variables to hold the data, loading status, and any errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://swiggy-api-4c740.web.app/swiggy-api.json";

  const fetchMenu = async () => {
    try {
        const response = await fetch(url);
        
        // This is the crucial part for handling server status errors
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        // This catches network failures and the custom HTTP error
        console.log("Fetch error:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <h2>Name of the Restaurant</h2>
      <h4>Menu</h4>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
