import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import AddItem from './AddItem';
import ItemList from './ItemList';
// Import other components if needed, like ItemList

function Admin() {
    const [activeSection, setActiveSection] = useState('addItem'); // State to track the active section

    // Function to handle section changes
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='bg-[#eaebf0] h-[100vh] w-full font-outfit'>
            <div>
                <AdminNavbar />
            </div>
            <div className='flex h-[89.5%] relative'>
                <div className='w-[15%] bg-white h-full border-x-2 border-gray-300 flex flex-col py-4'>
                    {/* side nav bar buttons */}
                    <div
                        className={`h-[6vh] px-4 flex items-center cursor-pointer ${
                            activeSection === 'addItem' ? 'bg-[#F2F3FF]' : 'bg-white'
                        }`}
                        onClick={() => handleSectionChange('addItem')} // Set active section to 'addItem'
                    >
                        <div className='flex flex-row'>
                            <MdOutlineAddToPhotos className='text-2xl mr-2' />
                            Add Item
                        </div>
                    </div>

                    <div
                        className={`h-[6vh] px-4 flex items-center cursor-pointer ${
                            activeSection === 'itemList' ? 'bg-[#F2F3FF]' : 'bg-white'
                        }`}
                        onClick={() => handleSectionChange('itemList')} // Set active section to 'itemList'
                    >
                        <div className='flex flex-row'>
                            <RiListView className='text-2xl mr-2' />
                            Item List
                        </div>
                    </div>
                </div>

                {/* Main content area where active section will be displayed */}
                <div className='h-[89.5%] w-[80%] relative'>
                    <h2 className='m-4 mx-8 font-semibold text-2xl'>
                        {activeSection === 'addItem' ? 'Add / Update Item' : 'Item List'}
                    </h2>
                    <div className='bg-white m-8 my-4 h-[95%] w-full p-8 relative'>
                        {/* Conditionally render based on active section */}
                        {activeSection === 'addItem' && <AddItem />}
                        {activeSection === 'itemList' && <ItemList/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
