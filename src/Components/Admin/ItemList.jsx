import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import nikonD750 from "../../assets/Images/nokonD750.jpg";
import sonyA73 from "../../assets/Images/sony A73.jpg";
import sigma50mm from "../../assets/Images/sigma 50mm.jpg";
import nikon300mm from "../../assets/Images/nikon 300mm.jpg";
import combosony from "../../assets/Images/combosony.jpg";
import godoxv1 from "../../assets/Images/godoxv1.jpg";
import air2 from "../../assets/Images/air2.jpg";

function ItemList() {
    const navigate = useNavigate(); // Initialize the navigate hook

    // Sample data for the items
    const items = [
        {
            id: 1,
            category: 'Camera',
            image: sonyA73,
            itemName: 'SONY A7 III',
            description: "The Sony A7III is a powerful mirrorless camera with a 24.2MP sensor, excellent autofocus, and 4K video recording. It is lightweight, making it perfect for photographers and videographers on the go.",
            price: 4500
        },
        {
            id: 2,
            category: 'Camera',
            image: nikonD750,
            itemName: 'NIKON D750',
            description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography.",
            price: 4500
        },
        {
            id: 2,
            category: 'Camera',
            image: nikonD750,
            itemName: 'NIKON D750',
            description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography.",
            price: 4500
        },
        {
            id: 3,
            category: "Lens",
            itemName: "SIGMA 50MM",
            price: "3000",
            perDay: "Per day",
            image: sigma50mm,
            description: "The Sigma 50mm f/1.4 is a high-performance prime lens designed for sharpness and clarity, perfect for portrait, street, and general photography. Its wide aperture ensures great low-light performance."
          },
          {
            id: 4,
            category: "Camera",
            itemName: "NIKON D750",
            price: "4000",
            perDay: "Per day",
            image: nikonD750,
            description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
          },
          {
            id: 5,
            category: "Camera",
            itemName: "NIKON D750",
            price: "4000",
            perDay: "Per day",
            image: nikonD750,
            description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
          },
    ];

    // Function to handle edit click
    const handleEdit = (id) => {
        navigate(`/update-item/${id}`); // Navigate to the update page with the item id
    };

    return (
        <div className="overflow-x-auto  h-full">
            <table className="min-w-full table-auto border-collapse ">
                <thead className=''>
                    <tr className="bg-gray-100 ">
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">#</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Image</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Category</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Item name</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Description</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Price</th>
                        <th className="px-6 py-3 border-b text-left text-gray-600 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className=' '>
                    {items.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 border-b text-gray-700">{index + 1}</td>
                            <td className="px-6 py-4 border-b text-gray-700">
                                <img src={item.image} alt="" width={36}/>
                            </td>
                            <td className="px-6 py-4 border-b text-gray-700">{item.category}</td>
                            <td className="px-6 py-4 border-b text-gray-700">{item.itemName}</td>
                            <td className="px-6 py-4 border-b text-gray-700">{item.description}</td>
                            <td className="px-6 py-4 border-b text-gray-700">{item.price}</td>
                            <td className="px-6 py-4 border-b text-gray-700">
                                <div className="flex space-x-4">
                                    <button 
                                        onClick={() => handleEdit(item.id)} 
                                        className="text-green-600 hover:text-green-800"
                                    >
                                        <FiEdit className="text-2xl" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <AiOutlineDelete className="text-2xl" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ItemList;
