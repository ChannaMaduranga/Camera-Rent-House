import React,{useEffect} from 'react'
import aboutImg from '../../assets/Images/AboutImg.jpg'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-[80%] flex justify-center flex-col  mx-auto'>
      <section className="flex flex-col items-center  justify-center text-center mt-16 md:mt-24 " data-aos="fade-in">
        <div className=' font-outfit'>
          <h2 className="text-2xl md:text-3xl font-normal mb-4 ">
            ABOUT <span className='font-semibold'>US</span>
          </h2>
        </div>
      </section>


      <section className=' flex flex-col md:flex-row md:space-x-8 lg:space-x-8 mt-[4vh] md:mt-[8vh] lg:mx-[10vh]' data-aos="fade-up">
        <div className='md:w-2/5 justify-center flex' data-aos="fade-up" data-aos-duration="1000" >
          <img className='sm:w-[60%] md:w-full' src={aboutImg} alt="aboutImg" />
        </div>
        <div className='md:w-3/5  flex flex-col font-poppins mt-16 md:mt-0'>
          <div className='text-sm text-gray-700 text-justify' data-aos="fade-up " data-aos-duration="4000">
            <p className='leading-6'>Welcome to Camera Rent House, your trusted partner for top-tier camera gear rentals. Our mission is to make professional photography equipment accessible to everyone, from seasoned photographers to passionate hobbyists. We offer a diverse selection of cameras, lenses, and accessories, ensuring you have the right tools for every occasion. With a commitment to quality, convenience, and customer satisfaction, Camera Rent House is here to support your creative journey, one shot at a time.</p>
          </div>

          <div className='mt-4' data-aos="fade-up" data-aos-duration="4000">
            <p className='font-semibold'>Our Vision</p>
            <p className='mt-4 leading-6 text-gray-700 text-sm'>
              Our vision is to make premium camera gear accessible to all, empowering photographers to capture their creative visions with ease and confidence.</p>
          </div>
        </div>
      </section>

      <section className='mt-16 md:mt-[25vh] font-outfit' data-aos="fade-up" data-aos-duration="1000">
        <p className='text-lg font-light text-gray-700'>WHY <span className='font-semibold'>CHOOSE US</span> </p>

        <div className='w-full border-2 relative mt-[8vh] flex flex-col md:flex-row justify-between' data-aos-duration="2000">
          <div className='border-2 flex-1 p-8 space-y-8 flex flex-col'>
            <p className='uppercase font-semibold'>Extensive Gear Selection</p>
            <p className='text-gray-700 leading-7'>We offer a wide range of high-quality cameras, lenses, and accessories to suit all photography needs, from beginners to professionals.</p>
          </div>
          <div className='border-2 flex-1 p-8 space-y-8 flex flex-col'>
            <p className='uppercase font-semibold'>Affordable and Convenient</p>
            <p className='text-gray-700 leading-7'>Enjoy competitive pricing with an easy online booking process that makes renting gear quick and hassle-free.</p>
          </div>
          <div className='border-2 flex-1 p-8 space-y-8 flex flex-col'>
            <p className='uppercase font-semibold'>Reliable and Trusted Service</p>
            <p className='text-gray-700 leading-7'>Our equipment is regularly maintained for top performance, and our expert team is always ready to assist with any questions or guidance you need.</p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About