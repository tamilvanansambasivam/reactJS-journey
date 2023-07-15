import React from "react";
import ReactDOM from "react-dom/client";

/*
Header 
   -logo
   -Nav bar

Body
    -search
    -RestaurantContainer
      -RestaurantCard
        -image
        -name of the resto , start rating , cuisine, delivery time 
Footer
     -copy right
     -links
     -address
     -contact

*/

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo"
                    src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.711969917.1689309164" />
            </div>

            <div className="nav-items ">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact </li>
                    <li>cart</li>


                </ul>
            </div>

        </div>
    )
}


const RestaurantCard = (props) => {
  
    const { resData } = props;
    const defaultImgID = "photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80";


    return (
        <div className="res-card">
            <img className="food-image"
                src={"https://images.unsplash.com/" + (resData.imgID || defaultImgID)} />

            <h3>{resData .resName}  </h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.star}</h4>
            <h4>{resData.minutes}</h4>


        </div>
    )
}

const resList = [{
    resName: 'Delicious Bites',
    cuisine: 'Italian',
    star: "4.4 stars",
    minutes: "35 minutes",
    imgID: 'photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'


}, {
    resName: 'The Mystery House',
    cuisine: 'Biryani, Indian, Asian',
    star: "4.5 stars",
    minutes: "30 minutes",
    imgID: 'photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
},
{
    resName: 'Spicy Fusion',
    cuisine: 'Mexican, Indian',
    star: '4.8 stars',
    minutes: '25 minutes',
},
{
    resName: 'Taste of Japan',
    cuisine: 'Japanese, Sushi',
    star: '4.6 stars',
    minutes: '40 minutes',
},
{
    resName: 'Mediterranean Delights',
    cuisine: 'Greek, Mediterranean',
    star: '4.3 stars',
    minutes: '45 minutes',
}
]



// not using key(not a best practice) <<<< index as key <<<<<<<<<<<< unique key (best practice)

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="resto-container">
                {/* <RestaurantCard />
                <RestaurantCard resName="KFC"  cuisine="Burger, Fast food"/> */}
                {resList.map((restaurant) => (
                    <RestaurantCard   key={restaurant.resName} resData={restaurant} />
                ))}





            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app ">

            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />) 
