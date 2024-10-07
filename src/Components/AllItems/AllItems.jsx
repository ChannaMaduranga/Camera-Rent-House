import React,{useEffect} from 'react'

import AllProductList from '../Product/AllProductList'

function AllItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center mt-16" data-aos="fade-in">
                <div className=' font-outfit'>
                    <h2 className="text-3xl md:text-3xl px-6 font-medium mb-4 ">
                    Top Camera Gear Rentals  Browse and Book with Ease
                    </h2>

                    <p className='font-light mt-8 text-[#4B5563]'>Simply browse through our extensive range of trusted camera gear.</p>
                </div>
            </section>
            <section className='md:py-[10vh] py-[5vh]'>
              <AllProductList/>
            </section>
    </div>
  )
}

export default AllItems