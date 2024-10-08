import React from 'react'

import { MdMailOutline } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import MapComponent from '../MapComponent/MapComponent';
import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';

function Contact() {
  return (

    <div className='w-[80%] flex justify-center flex-col  mx-auto'>
     <ToastContainer  position='top-right'/>

      <section className="flex flex-col items-center  justify-center text-center mt-16 md:mt-24 " data-aos="fade-in">
        <div className=' font-outfit'>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600 ">
            CONTACT <span className='font-semibold'>US</span>
          </h2>
        </div>
      </section>

      <section className=' md:h-[25vh] mt-[vh]' data-aos="fade-up" data-aos-duration="1000">
        <div className='flex flex-col md:flex-row w-full md:space-x-8 space-y-4 md:space-y-0 mt-8 h-full'>

        <div className='md:w-1/3   relative '>
            <div className='flex flex-row space-x-2 font-semibold'>
              <div className='flex  items-start space-x-2 '>
                <MdMailOutline className='text-3xl' />
                <p className='pt-1'>EMAIL :</p>
              </div>
              <div className='font-normal text-gray-500 pt-1 text-wrap'>
                camerarenthouse@gmail.com
              </div>

            </div>
          </div>

          <div className='md:w-1/3  '>
            <div className='flex flex-row space-x-2 font-semibold'>
              <div className='flex  items-start space-x-2 '>
                <IoIosHome className='text-3xl' />
                <p className='pt-1'>ADDRESS :</p>
              </div>
              <div className='font-normal text-gray-500 pt-1'>
                <p className='font-normal'> Address line 1 </p>
                <p className='font-normal'> Address line 2 </p>
                <p className='font-normal'> city </p><br /><br />

                <p className='font-normal'> Address line 1 </p>
                <p className='font-normal'> Address line 2 </p>
                <p className='font-normal'> city </p><br />
              </div>

            </div>
          </div>

          <div className='md:w-1/3 '>
            <div className='flex flex-row space-x-2 font-semibold'>
              <div className='flex  items-start space-x-2 '>
                <FiPhone className='text-3xl' />
                <p className='pt-1'>HOTLINE :</p>
              </div>
              <div className='font-normal text-gray-500 pt-1'>
                <p className='font-normal'> 011-2345678 </p>
                <p className='font-normal'> 011-2345678 </p>
                <p className='font-normal'> 011-2345678 </p>
              </div>

            </div>
          </div>
        </div>

      </section >


      {/* Google map section */}

      <section className='w-full flex justify-center items-center rounded-lg h-[65vh] relative  mt-[20vh] ' data-aos="fade-up" data-aos-duration="2000">
        <div className='w-full h-full rounded-lg'>
          <div className='w-full h-full rounded-lg' dangerouslySetInnerHTML={{
            __html: `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63423.59423877221!2d80.05789878571537!3d6.5248864049350885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3cd23d2643e8d%3A0x85cd2d3d9fb59e60!2sMatugama!5e0!3m2!1sen!2slk!4v1727865550329!5m2!1sen!2slk" width="100%" height="100%" style="border:0; border-radius:0.5rem;" allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    ` }}>
          </div>
        </div>
      </section>


      <section className='mt-16'data-aos="fade-up" data-aos-duration="2000">
        <h2 className="text-2xl md:text-3xl  mb-4 font-semibold text-gray-600 text-center ">
          Have questions? Reach out to us and we’ll be happy to assist!
        </h2>
        <p className='font-light mt-8 text-[#4B5563] text-center'>"If you need to get in touch, simply fill out the form below and send us a message. We'll respond promptly!"</p>
        <ContactForm  data-aos="fade-in" data-aos-duration="1000"/>
      </section>

    </div >
  )
}

export default Contact