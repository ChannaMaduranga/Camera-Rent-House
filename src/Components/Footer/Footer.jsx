import React from 'react'

import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";



function Footer() {
    return (
        <div>
            <footer className="bg-secondary-main text-white pt-10 mt-32">
                <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:grid  md:grid-cols-3 md:gap-8  w-[90%] md:w-[80%]">
                    {/* Left Section  */}
                    <div className=''>
                        <h3 className="font-bold text-sm md:text-lg mb-4 ">CAMERA RENT HOUSE</h3>
                        <p className='text-justify text-sm md:text-lg'>
                            Camera Rent House offers top-quality camera gear rentals at
                            affordable rates. Whether you're a professional or hobbyist, we
                            provide the tools you need for your next creative project. Easy
                            booking, expert support, and trusted service.
                        </p>
                    </div>
                        {/* middle Section  */}
                    <div className=' md:pl-[50%]  '>
                            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
                            <ul className='text-sm md:text-lg'>
                                <a href="/"><li className="mb-2 hover:underline cursor-pointer">Home</li></a>
                                <a href="/Allitems"><li className="mb-2 hover:underline cursor-pointer">All Items</li></a>
                                <a href="/About"><li className="mb-2 hover:underline cursor-pointer">About</li></a>
                                <a href="/Contact"><li className="mb-2 hover:underline cursor-pointer">Contact</li></a>
                            </ul>
                        </div>

                        {/* Right Section  */}
                        <div className=' md:pl-[30%] text-sm md:text-lg'>
                            <h3 className="font-bold text-lg mb-4">GET IN TOUCH</h3>
                            <p className="mb-2">011-2345678</p>
                            <p className="mb-2">camerarenthouse@gmail.com</p>
                            <p className="mb-2">We are open 24 hours</p>
                            <p className="mb-2">Matugama, Sri Lanka</p>

                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4 text-lg">
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fab fa-facebook"><FaFacebook /></i>
                                </a>
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fab fa-whatsapp"><FaWhatsapp /></i>
                                </a>
                                <a href="#" className="hover:text-gray-300">
                                    <i className="fas fa-envelope"><FaEnvelope /></i>
                                </a>
                            </div>
                        </div>



                    
                </div>

                {/* bottom section */}
                <div className="border-t border-gray-200 mt-10 pt-4 p-4 text-center  pb-4 ">
                    <p className="text-sm">
                        Copyright © 2024 CodeFlare Solutions by channa maduranga – All Right Reserved.
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer