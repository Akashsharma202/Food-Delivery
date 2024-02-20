// FormComponent.js
import React, { useState } from "react";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        id: "",
        time: "",
        day: "",
        num:0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log(formData)
            const response = await fetch("https://food-delivery-sand.vercel.app/updateDateAndTime", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            // Handle success, e.g., display a success message
            console.log("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">Name Of Restaurant:</label>
                    <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Time:</label>
                    <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="num">Number of Delivery Boy available:</label>
                    <input type="number" id="num" name="num" value={formData.num} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">Day:</label>
                    <input type="text" id="day" name="day" value={formData.day} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
