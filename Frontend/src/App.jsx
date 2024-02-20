import React, { useState, useEffect } from "react";
//import RestaurantList from "./components/RestaurantList";
import RestaurantList from "./Components/RestaurantList";
import {Routes,Route} from 'react-router-dom';
import RestaurantSummary from "./Components/RestaurantSummary";
import { useNavigate } from "react-router-dom";
import FormComponent from "./Components/FormComponent";
import Navbar from "./Components/Navbar";
const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurant,setRestaurant]=useState({});
    const navigate=useNavigate();
    useEffect(() => {

        const fetchRestaurants = async () => {
            try {
                const response = await fetch("http://localhost:5000/restaurants");
                const data = await response.json();
                setRestaurants(data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };

        fetchRestaurants();
    }, []);

    const handleRestaurantClick = (restaurant) => {
        // Handle click event when a restaurant card is clicked
        console.log("Restaurant clicked:", restaurant);
        setRestaurant(restaurant);
        navigate("/summary");
        // You can implement further actions here, such as displaying the menu
    };

    return (
        <div className="container mx-auto">
            <Navbar/>
            <h1 className="text-3xl font-bold text-center my-8">Restaurant List</h1>
            <Routes>
              <Route exact path="/" element={<RestaurantList restaurants={restaurants} onRestaurantClick={handleRestaurantClick} />}/>
              <Route exact path="/summary" element={<RestaurantSummary summary={restaurant}/>}/>
              <Route exact path="/form" element={<FormComponent/>}/>
            </Routes>
        </div>
    );
};

export default App;
