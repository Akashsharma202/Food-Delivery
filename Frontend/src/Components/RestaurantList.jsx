import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants, onRestaurantClick }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {restaurants.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} onClick={onRestaurantClick} />
            ))}
        </div>
    );
};

export default RestaurantList;
