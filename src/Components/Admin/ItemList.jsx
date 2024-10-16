import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import AdminNavbar from './AdminNavbar';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-toastify';


import nikonD750 from "../../assets/Images/nikonD750.jpg";
import sonyA73 from "../../assets/Images/sony A73.jpg";
import sigma50mm from "../../assets/Images/sigma 50mm.jpg";
import nikon300mm from "../../assets/Images/nikon 300mm.jpg";
import combosony from "../../assets/Images/combosony.jpg";
import godoxv1 from "../../assets/Images/godoxv1.jpg";
import air2 from "../../assets/Images/air2.jpg";



const API_URL = import.meta.env.VITE_API_URL;


function ItemList() {
    const navigate = useNavigate(); // Initialize the navigate hook
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('addItem'); // State to track the active section
    const [items, setItems] = useState([]);
    // Function to handle section changes
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    // Sample data for the items
    // const items = [
    //     {
    //         id: 1,
    //         category: 'Camera',
    //         image: sonyA73,
    //         itemName: 'SONY A7 III',
    //         description: "The Sony A7III is a powerful mirrorless camera with a 24.2MP sensor, excellent autofocus, and 4K video recording. It is lightweight, making it perfect for photographers and videographers on the go.",
    //         price: 4500
    //     },
    //     {
    //         id: 2,
    //         category: 'Camera',
    //         image: nikonD750,
    //         itemName: 'NIKON D750',
    //         description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography.",
    //         price: 4500
    //     },
    //     {
    //         id: 2,
    //         category: 'Camera',
    //         image: nikonD750,
    //         itemName: 'NIKON D750',
    //         description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography.",
    //         price: 4500
    //     },
    //     {
    //         id: 3,
    //         category: "Lens",
    //         itemName: "SIGMA 50MM",
    //         price: "3000",
    //         perDay: "Per day",
    //         image: sigma50mm,
    //         description: "The Sigma 50mm f/1.4 is a high-performance prime lens designed for sharpness and clarity, perfect for portrait, street, and general photography. Its wide aperture ensures great low-light performance."
    //     },
    //     {
    //         id: 4,
    //         category: "Camera",
    //         itemName: "NIKON D750",
    //         price: "4000",
    //         perDay: "Per day",
    //         image: nikonD750,
    //         description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
    //     },
    //     {
    //         id: 5,
    //         category: "Camera",
    //         itemName: "NIKON D750",
    //         price: "4000",
    //         perDay: "Per day",
    //         image: nikonD750,
    //         description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
    //     },
    // ];

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/api/items/${id}`);

            if (response.status === 200) {

                toast.success('Item deleted successfully!');

            } else {
                toast.error('Failed to delete the item.');
            }

        } catch (error) {
            console.error("Error deleting the item:", error);
            toast.error('Error occurred while deleting.');
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/items`); // Fetch data from API
                setItems(response.data); // Set the fetched data
                setLoading(false); // Disable loading once data is fetched
            } catch (error) {
                console.error("Error fetching items:", error);
                setLoading(false); // Disable loading in case of error
            }
        };

        fetchItems();
    }, [handleDelete]);

    // Function to handle edit click
    const handleEdit = (id) => {
        navigate(`/admin/update-item/${id}`); // Navigate to the update page with the item id
    };


    return (

        <div>
            <div className='md:bg-[#eaebf0] h-[100vh] w-full font-outfit'>
                <div>
                    <AdminNavbar />
                </div>
                <div className='flex h-[89.5%] relative '>
                    <div className='md:w-[20%] lg:w-[15%] hidden relative bg-white h-full border-x-2 border-gray-300 md:flex flex-col py-4'>
                        {/* side nav bar buttons */}
                        <Link to='/admin/addItem'>
                            <div
                                className='h-[6vh] px-4 flex items-center cursor-pointer bg-white '

                            >
                                <div className='flex flex-row'>
                                    <MdOutlineAddToPhotos className='text-2xl mr-2' />
                                    Add Item
                                </div>


                            </div>
                        </Link>

                        <div
                            className='h-[6vh] px-4 flex items-center cursor-pointer bg-[#F2F3FF] '
                        >

                            <div className='flex flex-row'>
                                <RiListView className='text-2xl mr-2' />
                                Item List
                            </div>
                        </div>
                        <div className=' px-4 mt-[68vh]'>
                            <button className="flex border-2 border-secondary-main text-secondary-main w-full justify-center  py-1 rounded-md  hover:bg-teal-600 hover:text-white">
                                Log out
                            </button>
                        </div>

                    </div>

                    {/* body content */}

                    <div className='h-[89.5%] w-full md:w-[70%] lg:w-[80%] relative '>



                        <h2 className='m-4 mx-8 font-semibold text-2xl'>
                            Item List
                        </h2>

                        <div className="overflow-x-auto   bg-white md:m-8 my-4 h-[95%] w-full md:p-8 relative">
                            <table className="min-w-full table-auto border-collapse ">
                                <thead className=''>
                                    <tr className="bg-gray-100 ">
                                        <th className="px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold">#</th>
                                        <th className="px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold">Image</th>
                                        <th className="hidden lg:table-cell   lg: px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold ">Category</th>
                                        <th className="px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold ">Item name</th>
                                        <th className=" hidden lg:table-cell px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold">Description</th>
                                        <th className="px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold">Price</th>
                                        <th className="px-4 md:px-6 py-3 border-b text-left text-gray-600 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className=' '>
                                    {items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 md:px-6 py-4 border-b text-gray-700">{index + 1}</td>
                                            <td className="px-4 md:px-6 py-4 border-b text-gray-700">
                                                <img src={item.image} alt="" width={36} />
                                            </td>
                                            <td className="hidden lg:table-cell lg:px-4 lg:md:px-6 py-4 border-b text-gray-700">{item.category}</td>
                                            <td className="px-4 md:px-4 py-4 border-b text-gray-700">{item.name}</td>
                                            <td className="hidden lg:table-cell px-4 md:px-6 py-4 border-b text-gray-700">{item.description}</td>
                                            <td className="px-4 md:px-6 py-4 border-b text-gray-700">{item.price}</td>
                                            <td className="px-4 md:px-6 py-4 border-b text-gray-700">
                                                <div className="flex space-x-4">
                                                    <button
                                                        onClick={() => handleEdit(item._id)}
                                                        className="text-green-600 hover:text-green-800"
                                                    >
                                                        <FiEdit className="text-2xl" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item._id)}
                                                        className="text-red-600 hover:text-red-800">
                                                        <AiOutlineDelete className="text-2xl" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>



                </div>
            </div>
        </div>






    );
}

export default ItemList;
