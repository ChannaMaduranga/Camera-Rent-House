import React,{useEffect} from 'react'

import img1 from "../../assets/Images/video1.png"
import { FaRegCirclePlay } from "react-icons/fa6";


function WatchVideoPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const itemsData = [
        {
            id: 1,
            name: "Review Sony A7 iii Mirrorless camera",
            image: img1,
            videoLink: 'https://www.youtube.com/watch?v=3yk_YgkaWGo&pp=ygUkUmV2aWV3IFNvbnkgQTcgaWlpIE1pcnJvcmxlc3MgY2FtZXJh',
        },
        {
            id: 1,
            name: "Review Sony A7 iii Mirrorless camera",
            image: img1,
            videoLink: 'https://www.youtube.com/watch?v=3yk_YgkaWGo&pp=ygUkUmV2aWV3IFNvbnkgQTcgaWlpIE1pcnJvcmxlc3MgY2FtZXJh',
        },
        {
            id: 1,
            name: "Review Sony A7 iii Mirrorless camera",
            image: img1,
            videoLink: 'https://www.youtube.com/watch?v=3yk_YgkaWGo&pp=ygUkUmV2aWV3IFNvbnkgQTcgaWlpIE1pcnJvcmxlc3MgY2FtZXJh',
        },
        {
            id: 1,
            name: "Review Sony A7 iii Mirrorless camera",
            image: img1,
            videoLink: 'https://www.youtube.com/watch?v=3yk_YgkaWGo&pp=ygUkUmV2aWV3IFNvbnkgQTcgaWlpIE1pcnJvcmxlc3MgY2FtZXJh',
        },
        {
            id: 1,
            name: "Review Sony A7 iii Mirrorless camera",
            image: img1,
            videoLink: 'https://www.youtube.com/watch?v=3yk_YgkaWGo&pp=ygUkUmV2aWV3IFNvbnkgQTcgaWlpIE1pcnJvcmxlc3MgY2FtZXJh',
        },
    ]

    return (
        <div>
            <section className="flex flex-col items-center w-[90%] mx-auto justify-center text-center mt-16 md:mt-24 " data-aos="fade-up" data-aos-duration="2000">
                <div className=' font-outfit'>
                    <h2 className="text-2xl md:text-3xl font-normal mb-4 ">
                        Discover and Learn More About Camera Gear
                    </h2>
                    <p className='font-light mt-8 text-[#4B5563]'>Watch these videos to learn more about our devices and how to use them effectively..</p>

                </div>
            </section>

            <section className='w-[80%]  mt-[10vh] mx-auto' data-aos="fade-up" data-aos-duration="2000">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {itemsData.map((item) => (
                        <div key={item.id} className="border p-4 relative rounded shadow-lg">
                            <div className=''>
                                <div className="relative  ">
                                    <img src={item.image}  alt="image" className="mx-auto" />
                                    <div className='w-full h-full bg-black absolute top-0 opacity-25'></div>
                                    <div className='absolute top-0  flex items-center justify-center bg-transparent w-full h-full'>
                                        <a href={item.videoLink}>
                                            <button className=" text-black  py-2 mt-2 rounded  ">
                                                <FaRegCirclePlay className='text-4xl text-white' />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="mt-2 w-full px-2">
                                        <div className="text-left font-sm">{item.name}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WatchVideoPage