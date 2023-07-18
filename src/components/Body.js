
import RestaurantCard from "./restoCard";
import resList from "./utilities/mockData";
import { useState } from "react";


const Body = () => {
    
    
    let [listOfRestaurant, setListOfRestraurant] = useState(resList)
    console.log(listOfRestaurant)

    // let listOfRestaurantJS = [
    //    {data: {
           
    //         id: "74453",
    //         name: "Tamil Pizza",
    //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //         cuisines: ["Pizzas"],
    //         deliveryTime:43,
    //         costForTwo: 40000,
    //         costForTwoString: "₹400 FOR TWO",
    //         avgRating: "4.4",
           
    //       }},

    //       {data: {
           
    //         id: "74454",
    //         name: "Domino's Pizza",
    //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //         cuisines: ["Pizzas"],
    //         deliveryTime:35,
    //         costForTwo: 40000,
    //         costForTwoString: "₹400 FOR TWO",
    //         avgRating: "3.3",
           
    //       }},

    //       {data: {
           
    //         id: "74455 ",
    //         name: "Tamil2 Pizza",
    //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //         cuisines: ["Pizzas"],
    //         deliveryTime:20,
    //         costForTwo: 40000,
    //         costForTwoString: "₹400 FOR TWO",
    //         avgRating: "3.3",
           
    //       }}
        
    //     ]


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => { 
                   const filtered = listOfRestaurant.filter((res)=>res.data.avgRating > 4.0)
                    console.log(setListOfRestraurant)
                   setListOfRestraurant(filtered)
                 }}>Top Rated Restaurant</button>
                 
            </div>
            <div className="search">search</div>
            <div className="resto-container">
             
          {
            //   resList.map(
            //     (restaurant) => (
            //         <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
            //     )
            // )

            listOfRestaurant.map(
                (restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                )
            )
           
          }

            </div>
        </div>
    )
}

export default Body;