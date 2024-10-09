import React, { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

function AddItem() {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    price: '',
    description: '',
  });

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
      setImagePreview(URL.createObjectURL(file)); // Generate image preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submit logic here
  };

  return (
    <div>
      <div className=''>
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

          <div className='flex flex-row w-full space-x-4 mt-8'>
            <div className='w-1/2'>
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
                  id="itemName"
                  name="itemName"
                  type="text"
                  placeholder="Item name"
                  value={formData.itemName}
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

            <div className='w-1/2 h-full'>
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

          <div className="flex items-center justify-start">
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
  );
}

export default AddItem;
