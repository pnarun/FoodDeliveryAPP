import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant container
 *    - Restaurant cards
 *      - Img
 *      - Name of restaurant, Start rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#b8b8b8ff",
};

const resList = [
  {
    resId: 1,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian", "North Indian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 2,
    resName: "Davangere Benne Dose",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/vcskjaaya5gdhfcmbgej",
    cusines: ["Dose", "Idly", "Paddu", "South Indian", "Snacks"],
    costForTwo: 25000,
    avgRating: 4.1,
    deliveryTime: 28,
  },
  {
    resId: 3,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 4,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 5,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 6,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 7,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 8,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 9,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
  {
    resId: 10,
    resName: "Meghana Foods",
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/g0isknuhld1ltwxkjkcg",
    cusines: ["Biryani", "South Indian", "Asian"],
    costForTwo: 40000,
    avgRating: 4.4,
    deliveryTime: 38,
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cusines, avgRating, costForTwo, imgSrc, deliveryTime } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={imgSrc}></img>
      <h3>{resName}</h3>
      <h6>{cusines.join(", ")}</h6>
      <h6>{avgRating} Stars</h6>
      <h6>₹{costForTwo / 100} FOR TWO</h6>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

// Fetch root div from HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React componet
root.render(<AppLayout />);
