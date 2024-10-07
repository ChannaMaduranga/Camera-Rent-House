import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const location = useLocation(); // Get the current path
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu
  const navRef = useRef(null); // Reference for the navbar

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      
      {menuOpen && <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black bg-opacity-40" />}

      <nav ref={navRef} className="bg-white shadow-lg py-4 relative z-50">
        <div className="container mx-auto px-6 md:w-[80%] md:px-0 flex items-center justify-between">
          <div className="text-lg font-bold text-teal-600">
          
            <Link to="/">Camera Rent House</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-poppins">
           
            <Link
              to="/"
              className={`text-gray-600 hover:text-teal-600 ${location.pathname === '/' ? 'border-b-2 border-teal-600' : ''
                }`}
            >
              HOME
            </Link>
            <Link
              to="/AllItems"
              className={`text-gray-600 hover:text-teal-600 ${location.pathname === '/AllItems' ? 'border-b-2 border-teal-600' : ''
                }`}
            >
              ALL ITEMS
            </Link>
            <Link
              to="/about"
              className={`text-gray-600 hover:text-teal-600 ${location.pathname === '/about' ? 'border-b-2 border-teal-600' : ''
                }`}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-teal-600 ${location.pathname === '/contact' ? 'border-b-2 border-teal-600' : ''
                }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-teal-600 focus:outline-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          
          <Link to="/Signin">
            <button className="hidden lg:flex bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-900">
              Create account
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden z-50 absolute bg-white text-center pb-20 space-y-4 font-outfit font-semibold p-8 m-4 w-[100%] mx-auto transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            }`}
        >
          
          <Link
            to="/"
            className={`block text-gray-600 hover:text-teal-600 ${location.pathname === "/" ? "border-b-2 border-teal-600" : ""
              }`}
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            HOME
          </Link>
          <Link
            to="/AllItems"
            className={`block text-gray-600 hover:text-teal-600 ${location.pathname === "/AllItems" ? "border-b-2 border-teal-600" : ""
              }`}
            onClick={() => setMenuOpen(false)}
          >
            ALL ITEMS
          </Link>
          <Link
            to="/about"
            className={`block text-gray-600 hover:text-teal-600 ${location.pathname === "/about" ? "border-b-2 border-teal-600" : ""
              }`}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={`block text-gray-600 hover:text-teal-600 ${location.pathname === "/contact" ? "border-b-2 border-teal-600" : ""
              }`}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/Signin"
            className={`block text-gray-600 hover:text-teal-600 ${location.pathname === "/Signin" ? "border-b-2 border-teal-600" : ""
              }`}
            onClick={() => setMenuOpen(false)}
          >
            SIGN UP
          </Link>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
