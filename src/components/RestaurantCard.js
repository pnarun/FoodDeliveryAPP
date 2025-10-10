import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    resName,
    cusines,
    avgRating,
    costForTwo,
    cloudImageId,
    deliveryTime,
  } = resData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudImageId}
      ></img>
      <h3 className="font-bold py-4 text-xl">{resName}</h3>
      <h6>{cusines.join(", ")}</h6>
      <h6>{avgRating} Stars</h6>
      <h6>₹{costForTwo / 100} FOR TWO</h6>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
