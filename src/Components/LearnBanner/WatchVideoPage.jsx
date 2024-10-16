import React,{useEffect} from 'react'

import img1 from "../../assets/Images/video1.png";
import img2 from "../../assets/Images/video2.png"
import img3 from "../../assets/Images/video3.png"
import img4 from "../../assets/Images/video4.png"

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
            id: 2,
            name: "Sony’s 200-600mm lens for wildlife photography",
            image: img2,
            videoLink: 'https://www.youtube.com/watch?v=aJHbBhh2jZI&ab_channel=WillBurrard-Lucas',
        },
        {
            id: 3,
            name: "Best Mirrorless Camera 2024",
            image: img3,
            videoLink: 'https://www.youtube.com/watch?v=gk9Rrde6L-A&pp=ygUibWlycm9ybGVzcyBjYW1lcmEgYW5kIGxlbnMgcmV2aWV3IA%3D%3D',
        },
        {
            id: 4,
            name: "Nikon Z5: A Full Frame Camera",
            image: img4,
            videoLink: 'https://www.youtube.com/watch?v=XiZQaneQWHg&pp=ygUibWlycm9ybGVzcyBjYW1lcmEgYW5kIGxlbnMgcmV2aWV3IA%3D%3D',
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