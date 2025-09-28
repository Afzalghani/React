import { CDN_URL } from "../Utils/constants";

const RestaurantCard= (props) => {
    // console.log(props);
    const { resData } = props;
   // console.log(resData.data.name);
const { name, cuisines, cloudinaryImageId, avgRating } = resData || {};
const deliveryTime = resData?.sla?.deliveryTime;

 
     return (
   <div className="res-card">
     <img alt="res-Logo" 
     className="res-logo" 
     src={CDN_URL + cloudinaryImageId}/>
     <h3>{name}</h3>
     <h4 className="cuisine">{cuisines.join(" , ")}</h4>
     <h4>{avgRating} stars</h4>
     <h4>{deliveryTime/100}</h4>
     <button className="order-btn">Order Now</button>
     </div>
     );
   };
  export default RestaurantCard;