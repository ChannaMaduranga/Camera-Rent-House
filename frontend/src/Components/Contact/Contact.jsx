import React from 'react'

import { MdMailOutline } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import MapComponent from '../MapComponent/MapComponent';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className='w-[80%] flex justify-center flex-col  mx-auto font-outfit'>
      <section className="flex flex-col items-center  justify-center text-center mt-24 ">
        <div className=' font-outfit'>
          <h2 className="text-4xl md:text-3xl font-normal mb-4 ">
            CONTACT <span className='font-semibold'>US</span>
          </h2>
        </div>
      </section>

      <section className=' h-[25vh] mt-[5vh]'>
        <div className='flex flex-row w-full space-x-8 mt-8 h-full'>

          <div className='w-1/3   '>
            <div className='flex flex-row space-x-2 items-center font-semibold'>
              <MdMailOutline className='text-3xl' />
              <p className=''>EMAIL : <span className='font-normal pl-2'> camerarenthouse@gmail.com </span></p>
            </div>
          </div>

          <div className='w-1/3 '>
            <div className='flex flex-row space-x-2 font-semibold'>
              <div className='flex  items-start space-x-2 '>
                <IoIosHome className='text-3xl' />
                <p className='pt-1'>ADDRESS :</p>
              </div>
              <div className='font-normal text-gray-700 pt-1'>
                <p className='font-normal'> Address line 1 </p>
                <p className='font-normal'> Address line 2 </p>
                <p className='font-normal'> city </p><br /><br />

                <p className='font-normal'> Address line 1 </p>
                <p className='font-normal'> Address line 2 </p>
                <p className='font-normal'> city </p><br />
              </div>

            </div>
          </div>

          <div className='w-1/3 '>
          <div className='flex flex-row space-x-2 font-semibold'>
              <div className='flex  items-start space-x-2 '>
                <FiPhone className='text-3xl' />
                <p className='pt-1'>HOTLINE :</p>
              </div>
              <div className='font-normal text-gray-700 pt-1'>
                <p className='font-normal'> 011-2345678 </p>
                <p className='font-normal'> 011-2345678 </p>
                <p className='font-normal'> 011-2345678 </p>
              </div>

            </div>
          </div>
        </div>

      </section >


      {/* Google map section */}

      <section className='w-full flex justify-center items-center rounded-lg h-[65vh] bg-gray-600 mt-[15vh]'>
        <div>
            Google Map
        </div>
      </section>

      <section className='mt-16'>
      <p className='font-light mt-8 text-[#4B5563] text-center'>"If you need to get in touch, simply fill out the form below and send us a message. We'll respond promptly!"</p>
        <ContactForm/>
      </section>

    </div >
  )
}

export default Contact