import React from 'react';
import poster from '../../assets/Images/POSTER.png';
import sony from '../../assets/Images/sony.png';
import canon from '../../assets/Images/canon.png';
import nikon from '../../assets/Images/nikon.png';
import fujifilm from '../../assets/Images/fijifilm.png';
import { useNavigate } from "react-router-dom";
import Product from '../Product/Product';
import LearnBanner from '../LearnBanner/LearnBanner';
import Footer from '../Footer/Footer';

function Home() {
    const navigate = useNavigate(); // Create a navigate function from useNavigate

    const handleRentClick = () => {
        navigate("/AllItems");
    }

    return (
        <div>
            {/* Banner Section */}
            <section className="bg-[#028F76] py-16 w-[80%] mx-auto my-8 rounded-2xl">
                <div className="container mx-auto px-6 md:px-12 flex  md:flex-row items-center">
                    <div className="md:w-3/4 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get Premium Camera Gear
                            <br />
                            at Camera Rent House
                        </h1>
                        <p className="text-lg mb-6 mt-8">
                            Now Available in Aluthgama, Mathugama, and Elpitiya. <br /> Rent High-Quality Camera Gear Near You!
                        </p>

                        <button onClick={handleRentClick} className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold mt-8">
                            Rent Your Gear →
                        </button>
                    </div>
                    <div className="md:w-2/4 mt-4 md:mt-0">
                        <img
                            src={poster}
                            alt="Camera Gear"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center mt-16">
                <div className=' font-outfit'>
                    <h2 className="text-4xl md:text-3xl font-medium mb-4 ">
                        Find Your Camera Gear
                    </h2>

                    <p className='font-light mt-8 text-[#4B5563]'>Simply browse through our wide selection of premium camera gear and <br />rent with ease – hassle-free bookings at Camera Rent Shop!</p>
                </div>
            </section>

            {/* Camera brand Images section */}

            <section className='items-center justify-center text-center mt-16 w-[80%] mx-auto'>
                <div className=' h-16 w-full flex justify-center  space-x-24 px-16'>
                    <div className=' h-full w-full flex justify-center items-center'>
                        <img className="w-a " src={sony} alt="Sony" />
                    </div>
                    <div className=' h-full w-full flex justify-center items-center'>
                        <img className="w-auto h-auto" src={nikon} alt="Nikon" />
                    </div>
                    <div className=' h-full w-full flex justify-center items-center'>
                        <img className="w-auto h-auto" src={canon} alt="canon" />
                    </div>
                    <div className=' h-full w-full flex justify-center items-center'>
                        <img className="w-auto h-auto" src={fujifilm} alt="fujifilm" />
                    </div>
                </div>
            </section>

            {/* product card list */}

            <section className="flex flex-col items-center justify-center text-center mt-24 mb-16">
                <Product/>
            </section>

            <section className='w-[80%] mx-auto mt-[20vh]'>
                <LearnBanner/>
            </section>
            



            



        </div>
    );
}

export default Home;
