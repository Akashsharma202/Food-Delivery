import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const RestaurantSummary = ({ summary }) => {
    const [cart, setCart] = useState([]);
    const navigate=useNavigate();
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const handleSubmit = () => {
        // Send cart data to the backend
        alert("Order Placed!! Thankyou visit Us again")
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-64 object-cover" src={summary.image} alt={summary.name} />
                <div className="p-6">
                    <h1 className="text-2xl font-semibold mb-2">{summary.name}</h1>
                    <p className="text-gray-700 text-base mb-4">{summary.summary}</p>
                    <p className="text-gray-600 mb-2">Rating: {summary.rating}</p>
                    <p className="text-gray-600 mb-2">Number of Delivery Persons: {summary.NumberOfDeliveryPerson}</p>
                    <p className="text-gray-600 mb-2">Working Hours: {summary.workingHours}</p>
                    <p className="text-gray-600 mb-2">Working Days: {summary.workingDays.join(', ')}</p>
                    <div>
                        <p className="text-gray-600 mb-2 font-semibold">Menu:</p>
                        <ul>
                            {summary.menu.map((item, index) => (
                                <li key={index} className="text-gray-600">
                                    {item.name} - ${item.price}
                                    <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={() => addToCart(item)}>Add to Cart</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Cart */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Cart</h2>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="text-gray-600">
                                    {item.name} - ${item.price}
                                    <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded" onClick={handleSubmit}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantSummary;
