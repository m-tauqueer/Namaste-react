import RestaurantCard from "./RestaurantCard";
import resList from "../utlis/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { API_URL } from "../utlis/constants.js";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,)
    console.log(JSON.stringify(listOfRestaurants, null, 2));
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase()),
              );

              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants
          ?.map((restaurant) => restaurant?.info)
          ?.filter(Boolean)
          ?.map((info) => (
            <RestaurantCard key={info.id} resData={info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
