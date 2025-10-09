import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    
    useEffect(() => {
        fetchData();
    },[]);

    // fetch data
    const fetchData = async () => {
        const data = await fetch(API_URL + resId);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;