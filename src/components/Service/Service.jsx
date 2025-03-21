import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Service = () => {
  return (
    <>
    <div className='container mx-auto flex flex-wrap justify-center items-center gap-10 px-5 pt-15 overflow-hidden'>
        <div className='flex flex-col items-center justify-center px-7 py-4 gap-2 bg-red-500 rounded-lg w-[220px] hover:scale-110 transition duration-500'>
        <FaShippingFast size={30} className='text-[white] '/>
       <p className=' text-[white] cursor-pointer'>Free Shipping</p>
      </div>

      <div className='flex flex-col items-center justify-center px-7 py-4  gap-2 bg-red-500 rounded-lg w-[220px] hover:scale-110 transition duration-500'>
        <FaShippingFast size={30} className='text-[white] '/>
       <p className='text-[white] cursor-pointer'>Authentic Products</p>
      </div>

      <div className='flex flex-col items-center justify-center px-7 py-4 gap-2 bg-red-500 rounded-lg w-[220px] hover:scale-110 transition duration-500'>
        <FaShippingFast  size={30} className='text-[white]'/>
       <p className=' text-[white] cursor-pointer'>Easy Returns</p>
      </div>

      <div className='flex flex-col items-center justify-center px-7 py-4 gap-2 bg-red-500 rounded-lg w-[220px] hover:scale-110 transition duration-500'>
      <MdOutlinePayment  size={30} className='text-[white] '/>
       <p className=' text-[white] cursor-pointer'>Sequare Payment</p>
      </div>
    </div>
    </>
  )
}

export default Service