import React, { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import AdminNavbar from './AdminNavbar';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { RiListView } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';



const API_URL = import.meta.env.VITE_API_URL;

function AddItem() {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    image: '',
    description: '',
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        image: file, 
      });
    }
  };
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Create FormData 
  const data = new FormData();
  data.append('category', formData.category);
  data.append('name', formData.name);
  data.append('price', formData.price);
  data.append('description', formData.description);

  
  if (formData.image instanceof File) {
    data.append('image', formData.image); 
  }

  try {
    const response = await axios.post(`${API_URL}/api/items`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file upload
      },
    });
    if (response.status === 201) {

      toast.success('Item Added successfully!');
      setTimeout(() => {
        navigate('/admin/itemList', { state: { smoothTransition: true } });
      }, 1000);
      
      
    } else {
      toast.error('Failed to add the item.');
    }
    // console.log('Item Added:', response.data);
    // Handle success (e.g., show success message, redirect, etc.)
  } catch (error) {
    console.error('Error adding item:', error);
    // Handle error (e.g., show error message)
  }
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
                className='h-[6vh] px-4 flex items-center cursor-pointer bg-[#F2F3FF]  '

              >
                <div className='flex flex-row '>
                  <MdOutlineAddToPhotos className='text-2xl mr-2 ' />
                  Add Item
                </div>


              </div>
            </Link>

            <Link to='/admin/itemList'>
            <div
              className='h-[6vh] px-4 flex items-center cursor-pointer '
            >

              <div className='flex flex-row'>
                <RiListView className='text-2xl mr-2' />
                Item List
              </div>
            </div>
            </Link>
            <div className=' px-4 mt-[68vh]'>
              <button className="flex border-2 border-secondary-main text-secondary-main w-full justify-center  py-1 rounded-md  hover:bg-teal-600 hover:text-white">
                Log out
              </button>
            </div>
          </div>

          {/* body content */}

          <div className='md:h-[89.5%] w-full md:w-[70%] lg:w-[80%] relative '>
            {/* <h2 className='m-4 mx-8 font-semibold text-2xl'>
                        {activeSection === 'addItem' ? 'Add / Update Item' : 'Item List'}
                    </h2>
                    <div className='bg-white m-8 my-4 h-[95%] w-full p-8 relative'>
                        {activeSection === 'addItem' && <AddItem />}
                        {activeSection === 'itemList' && <ItemList/>}
                    </div> */}


            <h2 className='m-4 mx-8 font-semibold text-2xl'>
              Add Item
            </h2>


            <div className='bg-white md:m-8 my-4 h-[100%] md:h-[95%] w-full p-8 relative'>
              <form className="" onSubmit={handleSubmit}>
                <div className='flex items-center space-x-4'>
                  <div className='relative h-[20vh] w-[20vh] bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-4xl text-gray-600 cursor-pointer'>
                    {imagePreview ? (
                      // Show the uploaded image preview
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      // Display upload icon when no image is selected
                      <IoCloudUploadOutline />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className='text-gray-600 text-center text-base'>
                    <p>Upload Item Picture</p>
                    <p className='text-base'>150 x 150</p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row w-full md:space-x-4 mt-8'>
                  <div className='md:w-1/2'>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-teal- bg-white"
                      >
                        <option value="">Select Category</option>
                        <option value="Camera">Camera</option>
                        <option value="Lens">Lens</option>
                        <option value="Light">Light</option>
                        <option value="Drone">Drone</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                        Item Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Item name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className='md:w-1/2 h-full'>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-teal-500"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start  md:mt-0">
                  <button
                    type="submit"
                    className="bg-secondary-main hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none"
                  >
                    Add Item
                  </button>
                </div>
              </form>
            </div>
          </div>



        </div>
      </div>
    </div >




  );
}

export default AddItem;
