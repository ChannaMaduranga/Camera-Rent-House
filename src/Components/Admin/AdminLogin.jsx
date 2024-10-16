import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/loading1.png';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password match 'admin123'
    if (username === 'admin123' && password === 'admin123') {
      // Navigate to /AddItem if credentials are correct
      navigate('/admin/itemList');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='h-[90vh]'>
      <div className='font-outfit h-full mx-8 flex items-center'>
        <div className='border-2 p-4 py-8 pb-32 md:p-8 rounded-lg md:py-16 w-[80vw] full sm:w-[50vh] mx-auto border-secondary-main'>
          <div className='items-center justify-center flex pb-8'>
            <img src={logo} width={100} alt="" />
          </div>
          <h2 className='text-2xl md:text-2xl font-semibold mb-1'>Admin Login</h2>

          <form onSubmit={handleSubmit}>
            <div className='mt-[5vh] flex flex-col'>
              <label htmlFor="username" className='font-semibold'>User Name</label>
              <input
                type="text"
                id="username"
                placeholder='Enter your username'
                className='border-2 border-gray-300 rounded-md px-2 text-sm py-1'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='mt-[3vh]'>
              <div className='flex justify-between'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <p className='text-sm text-teal-800'>forgot password</p>
              </div>
              <input
                type="password"
                id="password"
                placeholder='Enter your password'
                className='border-2 border-gray-300 rounded-md px-2 text-sm py-1 w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='mt-[5vh] flex flex-col'>
              <button
                type="submit"
                className='border-2 border-secondary-main text-white rounded-md px-2 text-sm py-1 font-semibold bg-secondary-main hover:bg-teal-900'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
