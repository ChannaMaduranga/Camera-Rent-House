import React from 'react'

import photographerImg from "../../assets/Images/photographer.png"

function LearnBanner() {
  return (
    <div>
        <section className="bg-[#028F76] relative w-full h-[50vh]  mx-auto my-8 rounded-2xl">
                <div className="container h-full mx-auto px-6 md:px-12 flex  md:flex-row items-center">
                    <div className="w-3/4 text-white">
                        <h1 className="text-4xl md:text-4xl font-semibold mb-4">
                        Discover and Learn More About 
                            <br />
                            Camera Gear
                        </h1>
                        <p className="text-lg mb-6 mt-8">
                            
                        </p>

                        <button  className="bg-white border-2  text-teal-600 px-6 py-3 rounded-full font-bold mt-8 hover:bg-secondary-main hover:text-white hover:border-2 hover:border-white">
                            Watch video
                        </button>
                    </div>
                    <div className="md:w-2/4 h-full  relative md:mt-0 top-[vh] object-contain">
                        <img
                            src={photographerImg}
                            alt="Camera Gear"
                            className="w-[41vh] absolute bottom-0 left-[10%] h-auto object-cover  "
                        />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default LearnBanner