import React from 'react'

import photographerImg from "../../assets/Images/photographer.png"

function LearnBanner() {
  return (
    <div>
        <section className="bg-[#028F76] py-16 w-full mx-auto my-8 rounded-2xl">
                <div className="container mx-auto px-6 md:px-12 flex  md:flex-row items-center">
                    <div className="md:w-3/4 text-white">
                        <h1 className="text-4xl md:text-4xl font-semibold mb-4">
                        Discover and Learn More About 
                            <br />
                            Camera Gear
                        </h1>
                        <p className="text-lg mb-6 mt-8">
                            
                        </p>

                        <button  className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold mt-8">
                            Watch video
                        </button>
                    </div>
                    <div className="md:w-2/4 mt-4 md:mt-0 relative">
                        <img
                            src={photographerImg}
                            alt="Camera Gear"
                            className="w-auto h-full "
                        />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default LearnBanner