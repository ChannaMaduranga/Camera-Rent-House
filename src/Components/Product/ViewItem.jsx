import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

import nikonD750 from "../../assets/Images/nikonD750.jpg";
import sonyA73 from "../../assets/Images/sony A73.jpg";
import sigma50mm from "../../assets/Images/sigma 50mm.jpg";
import nikon300mm from "../../assets/Images/nikon 300mm.jpg";
import combosony from "../../assets/Images/combosony.jpg";
import godoxv1 from "../../assets/Images/godoxv1.jpg";
import air2 from "../../assets/Images/air2.jpg";
import Loading from '../Loading/Loading';


const API_URL = import.meta.env.VITE_API_URL;

function ViewItem() {
    // const items = [
    //     {
    //       id: 1,
    //       category: "Camera",
    //       name: "NIKON D750",
    //       price: "Rs 4000",
    //       perDay: "Per day",
    //       image: nikonD750,
    //       description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
    //     },
    //     {
    //       id: 2,
    //       category: "Camera",
    //       name: "SONY A7III",
    //       price: "Rs 4500",
    //       perDay: "Per day",
    //       image: sonyA73,
    //       description: "The Sony A7III is a powerful mirrorless camera with a 24.2MP sensor, excellent autofocus, and 4K video recording. It is lightweight, making it perfect for photographers and videographers on the go."
    //     },
    //     {
    //       id: 3,
    //       category: "Lens",
    //       name: "SIGMA 50MM",
    //       price: "Rs 3000",
    //       perDay: "Per day",
    //       image: sigma50mm,
    //       description: "The Sigma 50mm f/1.4 is a high-performance prime lens designed for sharpness and clarity, perfect for portrait, street, and general photography. Its wide aperture ensures great low-light performance."
    //     },
    //     {
    //       id: 4,
    //       category: "Camera",
    //       name: "NIKON D750",
    //       price: "Rs 4000",
    //       perDay: "Per day",
    //       image: nikonD750,
    //       description: "The Nikon D750 is a versatile full-frame DSLR featuring a 24.3MP sensor, offering impressive image quality, dynamic range, and low-light performance. Ideal for both photography and videography."
    //     },
    //     {
    //       id: 5,
    //       category: "Lens",
    //       name: "SIGMA 50MM 1.4",
    //       price: "Rs 3000",
    //       perDay: "Per day",
    //       image: sigma50mm,
    //       description: "The Sigma 50mm f/1.4 is a high-performance prime lens known for its sharpness and wide aperture, making it excellent for portraits, low-light shooting, and creating beautiful bokeh."
    //     },
    //     {
    //       id: 6,
    //       category: "Combo Pack",
    //       name: "SONY COMBO",
    //       price: "Rs 10000",
    //       perDay: "Per day",
    //       image: combosony,
    //       description: "The Sony Combo includes a powerful camera and essential accessories, providing a complete solution for professional photographers and videographers. It’s a perfect kit for those seeking superior performance."
    //     },
    //     {
    //       id: 7,
    //       category: "Lens",
    //       name: "NIKON 300MM",
    //       price: "Rs 3000",
    //       perDay: "Per day",
    //       image: nikon300mm,
    //       description: "The Nikon 300mm f/4 lens is ideal for sports, wildlife, and action photography. With its fast aperture and telephoto reach, it captures distant subjects with clarity and sharpness."
    //     },
    //     {
    //       id: 8,
    //       category: "Light",
    //       name: "GODOX V1",
    //       price: "Rs 2000",
    //       perDay: "Per day",
    //       image: godoxv1,
    //       description: "The Godox V1 is a versatile round-head flash for both on-camera and off-camera usage. It provides natural lighting and supports wireless control, ideal for professional lighting setups."
    //     },
    //     {
    //       id: 9,
    //       category: "Drone",
    //       name: "MAVIC AIR 2",
    //       price: "Rs 4500",
    //       perDay: "Per day",
    //       image: air2,
    //       description: "The DJI Mavic Air 2 is a compact and powerful drone with a 48MP camera, capable of shooting 4K video. It is perfect for capturing stunning aerial shots and smooth footage."
    //     },
    //     {
    //       id: 10,
    //       category: "Light",
    //       name: "GODOX V1",
    //       price: "Rs 2000",
    //       perDay: "Per day",
    //       image: godoxv1,
    //       description: "The Godox V1 is a versatile round-head flash for both on-camera and off-camera usage. It provides natural lighting and supports wireless control, ideal for professional lighting setups."
    //     },
    //     {
    //       id: 11,
    //       category: "Drone",
    //       name: "MAVIC AIR 2",
    //       price: "Rs 4500",
    //       perDay: "Per day",
    //       image: air2,
    //       description: "The DJI Mavic Air 2 is a compact and powerful drone with a 48MP camera, capable of shooting 4K video. It is perfect for capturing stunning aerial shots and smooth footage."
    //     },
    //     {
    //       id: 12,
    //       category: "Light",
    //       name: "GODOX V1",
    //       price: "Rs 2000",
    //       perDay: "Per day",
    //       image: godoxv1,
    //       description: "The Godox V1 is a versatile round-head flash for both on-camera and off-camera usage. It provides natural lighting and supports wireless control, ideal for professional lighting setups."
    //     }
    //   ];
      

  const { id } = useParams();
  const [viewItem, setViewItem] = useState(null);
  //const numericId = Number(id); // Convert the id to a number
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  // const viewItem = items.find(item => item.id === numericId);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/items/${id}`); // Fetch data from API
        setViewItem(response.data); // Set the fetched data
        setLoading(false); // Disable loading once data is fetched
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false); // Disable loading in case of error
      }
    finally {
      setLoading(false);
    }
    };
    
    fetchItems();
  }, [id]);


  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading) {
    return <div><Loading/></div>;
  }

  if (!viewItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="md:w-[80%] w-[90%] mt-10 md:mt-[10vh] mx-auto font-outfit">
      <div className='flex flex-col md:flex-row w-full h-[90vh] sm:h-auto md:space-x-5'>
        <div className='w-3/4 sm:w-3/5 md:w-2/5 lg:w-1/3 h-full relative mx-auto flex items-center'>
          <img src={viewItem.image} alt={viewItem.name} className="mx-auto md:w-full " />
        </div>
        <div className='md:w-3/4 h-full'>
          <h2 className="text-xl md:text-2xl md:px-6 font-bold mb-4  sm:mt-8 md:mt-0 lg:mt-8">
            {viewItem.name}
          </h2>
          <h2 className="text-xl md:text-xl md:px-6 font-semibold mb-4 text-gray-700 mt-8">
            Description
          </h2>
          <p className='md:px-6 text-gray-700 text-justify'>
            {viewItem.description ? viewItem.description : "No description available"}
          </p>
          <div className='flex mt-12 md:mt-6 lg:mt-10 justify-center sm:justify-center lg:justify-start space-x-4 md:space-x-0'>
            <div className='bg-secondary-main md:mx-4'>
              <h2 className="text-xl md:text-2xl md:px-4 px-10 font-semibold text-white">
                {viewItem.price}
              </h2>
            </div>
            <a href="https://wa.me/message/ZQBFTQ25FYECF1" target="_blank" rel="noopener noreferrer">
              <div className='bg-white border-2 border-secondary-main hover:bg-secondary-main md:mx-6 cursor-pointer'>
                <h2 className="text-xl md:text-xl md:px-6 px-4 font-semibold text-secondary-main hover:text-white">
                  BOOK NOW
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='md:mt-4 mt-8'>
        <h2 className="text-xl md:text-xl font-semibold mb-4 text-gray-600 mt-8 md:mt-16">CONDITION</h2>
        <hr className='h-1 border-1 bg-gray-200' />
      </div>
      <div className='py-8 space-y-4 text-sm lg:text-base'>
        <p className='text-gray-600'><span className='font-semibold'>Security Deposit:</span> A refundable security deposit is required before equipment is rented out. The amount will vary depending on the equipment.</p>
        <p className='text-gray-600'><span className='font-semibold'>Rental Period:</span> All gear must be returned by the agreed-upon date and time. Late returns may incur additional fees.</p>
        <p className='text-gray-600'><span className='font-semibold'>Equipment Inspection:</span> Customers are responsible for inspecting the equipment upon receiving it and reporting any issues immediately.</p>
        <p className='text-gray-600'><span className='font-semibold'>Damage and Loss:</span> Renters are liable for any damage, theft, or loss of the equipment during the rental period. Insurance options may be available for additional protection.</p>
        <p className='text-gray-600'><span className='font-semibold'>Cancellation Policy:</span> Cancellations must be made 24 hours before the rental date to avoid cancellation fees.</p>
        <p className='text-gray-600'><span className='font-semibold'>Proper Use:</span> Equipment must be used for its intended purpose and handled with care. Misuse or negligent use may result in additional charges.</p>
      </div>
    </div>
  );
}

export default ViewItem;
