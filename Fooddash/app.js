import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
 return (
    <div className="header">
    <div className="logo-container">

        <img src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700" alt="FoodDash Logo" className="logo" />
    </div>
  

    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
  </div>
 )
};

const RestaurantCard = (props) =>{
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://www.news-medical.net/images/news/ImageForNews_808838_17461258694907356.jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cusisine}</h4>
            <h4>{props.ratting} ⭐</h4>
            <h4>{props.time} Minute</h4>

        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>

             <div className="res-container">
                <RestaurantCard resName="Meghna Foods" cusisine="Biryani, North Indian" ratting="4 "  time="5"/>
                <RestaurantCard resName="KFC" cusisine="Chincken" ratting="5 " time="5"/>
                <RestaurantCard resName="bG" cusisine="burger" ratting="2 " time="5"/>
                <RestaurantCard resName="Test 4" cusisine="paneer" ratting="6 " time="30"/>
                <RestaurantCard />
                
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> 

             </div>
        </div>
    )
}
const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />)