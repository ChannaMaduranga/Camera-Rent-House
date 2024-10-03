import React from 'react'

import photographerImg from "../../assets/Images/photographer.png"
import sonyvideo from "../../assets/Videos/sony.mp4"

function LearnBanner() {
    return (
        <div>
            <section className=" relative w-full md:h-[60vh]  mx-auto md:my-8 rounded-2xl">
                <div className="container relative h-full mx-auto  flex  md:flex-row items-center">
                    <div className='w-full h-full overflow-hidden items-center rounded-2xl object-contain'>
                        <video src={sonyvideo} autoPlay muted loop className='object-cover items-center' />
                    </div>
                    <div className="md:w-3/4 text-white absolute px-6 md:px-12">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl  font-semibold mb-4">
                            Discover and Learn More About
                            <br />
                            Camera Gear
                        </h1>
                        <p className="text-lg mb-6 mt-8">

                        </p>

                        <a href='/Videos'><button className="border-2  text-white px-6 py-3 rounded-full font-bold mt-8 hover:bg-black hover:text-white hover:border-2 hover:border-white">
                            Watch video
                        </button></a>
                    </div>
                    <div></div>
                    {/* <div className="md:w-2/4 h-full  relative md:mt-0 top-[vh] object-contain">
                        <img
                            src={photographerImg}
                            alt="Camera Gear"
                            className="w-[41vh] absolute bottom-0 left-[10%] h-auto object-cover  "
                        />
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default LearnBanner