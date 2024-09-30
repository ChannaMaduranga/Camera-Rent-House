import React, { useState } from "react";

import nikonD750 from "../../assets/Images/nokonD750.jpg"
import sonyA73 from "../../assets/Images/sony A73.jpg"
import sigma50mm from "../../assets/Images/sigma 50mm.jpg"
import nikon300mm from "../../assets/Images/nikon 300mm.jpg"
import combosony from "../../assets/Images/combosony.jpg"
import godoxv1 from "../../assets/Images/godoxv1.jpg"
import air2 from "../../assets/Images/air2.jpg"
import { useNavigate } from "react-router-dom";

const itemsData = [
    {
        id: 1,
        category: "Camera",
        name: "NIKON D750",
        price: "Rs 4000",
        perDay: "Per day",
        image: nikonD750,
    },
    {
        id: 2,
        category: "Camera",
        name: "SONY A7III",
        price: "Rs 4500",
        perDay: "Per day",
        image: sonyA73,
    },
    {
        id: 3,
        category: "Lens",
        name: "SIGMA 50MM",
        price: "Rs 3000",
        perDay: "Per day",
        image: sigma50mm,
    },
    {
        id: 4,
        category: "Camera",
        name: "NIKON D750",
        price: "Rs 4000",
        perDay: "Per day",
        image: nikonD750,
    },
    {
        id: 5,
        category: "Lens",
        name: "SIGMA 50MM 1.4",
        price: "Rs 3000",
        perDay: "Per day",
        image: sigma50mm,
    },
    {
        id: 6,
        category: "Combo Pack",
        name: "SONY COMBO",
        price: "Rs 10000",
        perDay: "Per day",
        image: combosony,
    },
    {
        id: 7,
        category: "Lens",
        name: "NIKON 300MM",
        price: "Rs 3000",
        perDay: "Per day",
        image: nikon300mm,
    },
    {
        id: 8,
        category: "Light",
        name: "GODOX V1",
        price: "Rs 2000",
        perDay: "Per day",
        image: godoxv1,
    },
    {
        id: 9,
        category: "Drone",
        name: "MAVIC AIR 2",
        price: "Rs 4500",
        perDay: "Per day",
        image: air2,
    },


    // Add more items as needed
];

const categories = ["All", "Combo Pack", "Camera", "Lens", "Light", "Drone"];

const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter items based on selected category
    const filteredItems =
        selectedCategory === "All"
            ? itemsData
            : itemsData.filter((item) => item.category === selectedCategory);


    const navigate = useNavigate(); // Create a navigate function from useNavigate

    const handleRentClick = () => {
        navigate("/AllItems");
        }

    return (
        <div className="w-[80%] mx-auto mt-4">
            {/* Category Buttons */}
            <div className="flex justify-start  space-x-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`border px-4 py-2 rounded ${selectedCategory === category ? "bg-secondary-main text-white" : ""
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-5 gap-6">
                {filteredItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow-lg">

                        <div className="relative">
                            <img src={item.image} alt={item.name} className="mx-auto" />
                            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1">
                                RENT
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-start mt-2 font-semibold w-1/2">{item.name}</div>
                            <div className="mt-2 w-1/2">
                                <div className="text-end font-semibold">{item.price}</div>
                                <div className="text-end font-sm">{item.perDay}</div>
                            </div>
                        </div>
                        <button className="bg-white text-secondary-main w-full py-2 mt-2 rounded border-secondary-main border-2 hover:bg-secondary-main hover:text-white">
                            Call Now
                        </button>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center mt-8">
                <button onClick={handleRentClick} className="bg-[#57ad9e] hover:bg-secondary-main text-white px-8 py-2 rounded">
                    more
                </button>
            </div>
        </div>
    );
};

export default Product;
