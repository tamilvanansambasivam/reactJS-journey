import RestaurantCard from "./restoCard";
import resList from "./utilities/mockData";
import { useState, useEffect } from "react";
import InputBox from "./Input";

const Body = () => {
  let [listOfRestaurant, setListOfRestraurant] = useState(resList);
  let [searchValue,setSearchValue]=useState("")
  console.log(listOfRestaurant);
  useEffect(()=>{
    console.log("useEffect")
  },[])



  return (
    <div className="body">
      <div className="filter">
        
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4.0
            );
            console.log(setListOfRestraurant);
            setListOfRestraurant(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search" >
        <InputBox />
      </div>
      <div className="resto-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
