import React from "react";

const RestaurantCard = ({ restaurant, onClick }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={() => onClick(restaurant)}>
            <img className="w-full h-64 object-cover" src={restaurant.image} alt={restaurant.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{restaurant.name}</div>
            </div>
        </div>
    );
};

export default RestaurantCard;
