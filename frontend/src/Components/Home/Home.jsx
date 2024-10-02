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
            <section className="bg-[#028F76] py-6 sm:py-12 md:py-16 w-[95%] md:w-[80%] mx-auto my-8 rounded-2xl">
                <div className="container relative mx-auto  md:px-12 flex  md:flex-row items-center">
                    <div className="w-3/4 px-4 sm:px-8 md:px-4 md:w-3/4 text-white absolute top-0 sm:top-[5%] lg:top-[10%] xl:top-[20%] " >
                        <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4" data-aos="fade-up">
                            Get Premium Camera Gear
                            <br />
                            at Camera Rent House
                        </h1>
                        <p className="text-xs md:text-lg md-w[50%] mb-6 mt-8" data-aos="zoom-in">
                            Now Available in Aluthgama, Mathugama, and Elpitiya. <br />  Rent High-Quality Camera Gear Near You!
                        </p>

                        <button data-aos="zoom-in" data-aos-duration="1000" onClick={handleRentClick} className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold md:mt-4 lg:mt-8 text-xs md:text-lg">
                            Rent Your Gear →
                        </button>
                    </div>
                    <div className="w-2/4 m-4 ml-[50%]  md:w-2/4 m  md:mt-0 " data-aos="fade-left">
                        <img
                            src={poster}
                            alt="Camera Gear"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center md:mt-[10vh]" data-aos="fade-up">
                <div className=' font-outfit'>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-medium mb-4 ">
                        Find Your Camera Gear
                    </h2>

                    <p className='font-light text-sm sm:text-sm md:text-lg mx-4 mt-8 text-[#4B5563]'>Simply browse through our wide selection of premium camera gear and <br />rent with ease – hassle-free bookings at Camera Rent Shop!</p>
                </div>
            </section>

            {/* Camera brand Images section */}

            <section className='items-center justify-center text-center mt-16 w-[90%] sm:w-[80%] mx-auto'  data-aos="fade-up">
                <div className='md:h-16 w-full flex justify-center items-center space-x-4 sm:space-x-12 lg:space-x-20 md:px-16 '>
                    <div className=' h-full w-full flex justify-center items-center'>
                        <img className=" " src={sony} alt="Sony" />
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

            <section className="flex flex-col items-center justify-center text-center mt-12 md:mt-24 mb-16" data-aos="fade-up">
                <Product/>
            </section>

            <section className='md:w-[80%] w-[95%] mx-auto md:mt-[20vh]' data-aos="fade-in" data-aos-duration="2000">
                <LearnBanner/>
            </section>
            



            



        </div>
    );
}

export default Home;
