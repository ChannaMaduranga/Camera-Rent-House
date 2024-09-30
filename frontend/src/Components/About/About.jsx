import React from 'react'
import aboutImg from '../../assets/Images/AboutImg.jpg'

function About() {
  return (
    <div className='w-[80%] flex justify-center flex-col  mx-auto'>
      <section className="flex flex-col items-center  justify-center text-center mt-24 ">
        <div className=' font-outfit'>
          <h2 className="text-4xl md:text-3xl font-normal mb-4 ">
            ABOUT <span className='font-semibold'>US</span>
          </h2>
        </div>
      </section>


      <section className=' flex space-x-16 mt-[8vh] mx-[15vh]'>
        <div className='w-2/5 '>
          <img src={aboutImg} alt="aboutImg" />
        </div>
        <div className='w-3/5  flex flex-col font-poppins'>
          <div className='text-sm text-gray-700 text-justify'>
            <p className='leading-6'>Welcome to Camera Rent House, your trusted partner for top-tier camera gear rentals. Our mission is to make professional photography equipment accessible to everyone, from seasoned photographers to passionate hobbyists. We offer a diverse selection of cameras, lenses, and accessories, ensuring you have the right tools for every occasion. With a commitment to quality, convenience, and customer satisfaction, Camera Rent House is here to support your creative journey, one shot at a time.</p>
          </div>

          <div className='mt-4'>
            <p className='font-semibold'>Our Vision</p>
            <p className='mt-4 leading-6 text-gray-700 text-sm'>
              Our vision is to make premium camera gear accessible to all, empowering photographers to capture their creative visions with ease and confidence.</p>
          </div>
        </div>
      </section>

      <section className='mt-[25vh] font-outfit'>
        <p className='text-lg font-light text-gray-700'>WHY <span className='font-semibold'>CHOOSE US</span> </p>

        <div className='w-full border-2 h-[35vh] mt-[8vh] flex flex-row justify-between'>
            <div className='border-2 h-full w-1/3 p-8 space-y-8'>
              <p className='uppercase font-semibold'>Extensive Gear Selection</p>
              <p className='text-gray-700 leading-7'>We offer a wide range of high-quality cameras, lenses, and accessories to suit all photography needs, from beginners to professionals.</p>

            </div>
            <div className='border-2 h-full w-1/3 p-8 space-y-8'>
              <p className='uppercase font-semibold'>Affordable and Convenient</p>
              <p className='text-gray-700 leading-7'>Enjoy competitive pricing with an easy online booking process that makes renting gear quick and hassle-free.</p>
            </div>
            <div className='border-2 h-full w-1/3 p-8 space-y-8'>
              <p className='uppercase font-semibold'>Reliable and Trusted Service</p>
              <p className='text-gray-700 leading-7'>Our equipment is regularly maintained for top performance, and our expert team is always ready to assist with any questions or guidance you need.</p>

            </div>
        </div>
      </section>

    </div>
  )
}

export default About