import React from 'react'

import AllProductList from '../Product/AllProductList'

function AllItems() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center mt-16">
                <div className=' font-outfit'>
                    <h2 className="text-4xl md:text-3xl font-medium mb-4 ">
                    Top Camera Gear Rentals – Browse and Book with Ease
                    </h2>

                    <p className='font-light mt-8 text-[#4B5563]'>Simply browse through our extensive range of trusted camera gear.</p>
                </div>
            </section>
            <section className='py-[10vh]'>
              <AllProductList/>
            </section>
    </div>
  )
}

export default AllItems