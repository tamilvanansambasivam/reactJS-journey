import { CDN_URL } from "./utilities/constant";

const RestaurantCard = (props) => {
  
    const { resData } = props;
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId,costForTwo} =resData?.data


    return (
        <div className="res-card">
            <img className="food-image"
                src={
                    CDN_URL+cloudinaryImageId
                  } />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs.{costForTwo/100}</h4>
            <h4>Delivery Time: {deliveryTime} minutes</h4>


        </div>
    )
}

export default RestaurantCard;