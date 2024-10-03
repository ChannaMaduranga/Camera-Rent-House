import React, { useState } from "react";
import nikonD750 from "../../assets/Images/nokonD750.jpg";
import sonyA73 from "../../assets/Images/sony A73.jpg";
import sigma50mm from "../../assets/Images/sigma 50mm.jpg";
import nikon300mm from "../../assets/Images/nikon 300mm.jpg";
import combosony from "../../assets/Images/combosony.jpg";
import godoxv1 from "../../assets/Images/godoxv1.jpg";
import air2 from "../../assets/Images/air2.jpg";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

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
  {
    id: 10,
    category: "Light",
    name: "GODOX V1",
    price: "Rs 2000",
    perDay: "Per day",
    image: godoxv1,
  },
  {
    id: 11,
    category: "Drone",
    name: "MAVIC AIR 2",
    price: "Rs 4500",
    perDay: "Per day",
    image: air2,
  },
  {
    id: 12,
    category: "Light",
    name: "GODOX V1",
    price: "Rs 2000",
    perDay: "Per day",
    image: godoxv1,
  },
  // Add more items if needed
];

const categories = ["All",  "Camera", "Lens", "Light", "Drone"];

const AllProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? itemsData
      : itemsData.filter((item) => item.category === selectedCategory);

  // Calculate current items for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate("/AllItems");
  };

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {currentItems.map((item) => (
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

      {/* Pagination */}
      <section className="justify-end mt-4 flex">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={filteredItems.length}
          onChange={onPageChange}
        />
      </section>
    </div>
  );
};

export default AllProductList;
