import React, { useState,useEffect } from "react";

import nikonD750 from "../../assets/Images/nikonD750.jpg"
import sonyA73 from "../../assets/Images/sony A73.jpg"
import sigma50mm from "../../assets/Images/sigma 50mm.jpg"
import nikon300mm from "../../assets/Images/nikon 300mm.jpg"
import combosony from "../../assets/Images/combosony.jpg"
import godoxv1 from "../../assets/Images/godoxv1.jpg"
import air2 from "../../assets/Images/air2.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;


// const itemsData = [
//     {
//         id: 1,
//         category: "Camera",
//         name: "NIKON D750",
//         price: "Rs 4000",
//         perDay: "Per day",
//         image: nikonD750,
//     },
//     {
//         id: 2,
//         category: "Camera",
//         name: "SONY A7III",
//         price: "Rs 4500",
//         perDay: "Per day",
//         image: sonyA73,
//     },
//     {
//         id: 3,
//         category: "Lens",
//         name: "SIGMA 50MM",
//         price: "Rs 3000",
//         perDay: "Per day",
//         image: sigma50mm,
//     },
//     {
//         id: 4,
//         category: "Camera",
//         name: "NIKON D750",
//         price: "Rs 4000",
//         perDay: "Per day",
//         image: nikonD750,
//     },
//     {
//         id: 5,
//         category: "Lens",
//         name: "SIGMA 50MM 1.4",
//         price: "Rs 3000",
//         perDay: "Per day",
//         image: sigma50mm,
//     },
//     {
//         id: 6,
//         category: "Combo Pack",
//         name: "SONY COMBO",
//         price: "Rs 10000",
//         perDay: "Per day",
//         image: combosony,
//     },
//     {
//         id: 7,
//         category: "Lens",
//         name: "NIKON 300MM",
//         price: "Rs 3000",
//         perDay: "Per day",
//         image: nikon300mm,
//     },
//     {
//         id: 8,
//         category: "Light",
//         name: "GODOX V1",
//         price: "Rs 2000",
//         perDay: "Per day",
//         image: godoxv1,
//     },
//     {
//         id: 9,
//         category: "Drone",
//         name: "MAVIC AIR 2",
//         price: "Rs 4500",
//         perDay: "Per day",
//         image: air2,
//     },


//     // Add more items as needed
// ];

const categories = ["All", "Camera", "Lens", "Light", "Drone"];

const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [itemsData, setItemsData] = useState([]); // State for storing items from API

    // Filter items based on selected category
    const filteredItems =
        selectedCategory === "All"
            ? itemsData.slice(0, 10)
            : itemsData.filter((item) => item.category === selectedCategory);


    const navigate = useNavigate(); // Create a navigate function from useNavigate

    const handleRentClick = () => {
        navigate("/AllItems");

        

    }

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const response = await axios.get(`${API_URL}/api/items`); // Fetch data from API
            setItemsData(response.data); // Set the fetched data
            // setLoading(false); // Disable loading once data is fetched
          } catch (error) {
            console.error("Error fetching items:", error);
            // setLoading(false); // Disable loading in case of error
          }
        };
        
        fetchItems();
      }, []);
    

    return (
        <div className="md:w-[80%] w-[95%] mx-auto mt-4">
            {/* Category Buttons */}
            <div className="flex justify-start  space-x-4 mb-6 w-full">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`border px-4 py-2 sm:py-2 rounded text-xs sm:text-md ${selectedCategory === category ? "bg-secondary-main text-white" : ""
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredItems.map((item,index) => (
                    <div key={index} className="border p-4 rounded shadow-lg">

                        <Link to={`/ViewItem/${item._id}`}>
                        <div className="relative">
                            <img src={item.image} alt={item.name} className="mx-auto" />
                            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1">
                                RENT
                            </div>
                        </div>
                        </Link>
                        <div className="flex flex-row justify-between">
                            <div className="text-start mt-2 font-semibold w-1/2">{item.name}</div>
                            <div className="mt-2 w-1/2">
                                <div className="text-end font-semibold">{item.price}</div>
                                <div className="text-end font-sm">Per day</div>
                            </div>
                        </div>
                        <a href="https://wa.me/message/ZQBFTQ25FYECF1"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button className="bg-white text-secondary-main w-full py-2 mt-2 rounded border-secondary-main border-2 hover:bg-secondary-main hover:text-white">
                                Call Now
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center mt-16">
                <button onClick={handleRentClick} className="bg-[#57ad9e] hover:bg-secondary-main text-white px-8 py-2 rounded">
                    More Items
                </button>
            </div>
        </div>
    );
};

export default Product;
