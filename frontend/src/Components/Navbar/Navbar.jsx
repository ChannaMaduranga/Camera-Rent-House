import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Get the current path

  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="text-lg font-bold text-teal-600">
          Camera Rent House
        </div>
        <div className="hidden md:flex space-x-8 font-poppins">
          <a
            href="/"
            className={`text-gray-600 hover:text-teal-600 ${
              location.pathname === '/' ? 'border-b-2 border-teal-600' : ''
            }`}
          >
            HOME
          </a>
          <a
            href="/items"
            className={`text-gray-600 hover:text-teal-600 ${
              location.pathname === '/items' ? 'border-b-2 border-teal-600' : ''
            }`}
          >
            ALL ITEMS
          </a>
          <a
            href="/about"
            className={`text-gray-600 hover:text-teal-600 ${
              location.pathname === '/about' ? 'border-b-2 border-teal-600' : ''
            }`}
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className={`text-gray-600 hover:text-teal-600 ${
              location.pathname === '/contact' ? 'border-b-2 border-teal-600' : ''
            }`}
          >
            CONTACT
          </a>
        </div>
        <button className="bg-teal-600 text-white px-6 py-2 rounded-full">
          Create account
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
