import React from 'react'
import EmptyImg from '../../assets/emptyimg.jpg'
import { Link } from 'react-router-dom'

const CardEmpty = () => {
  return (
   <> 
   <div className='mt-26 w-full container mx-auto h-110 bg-[#fff3f30e] shadow-lg rounded-lg text-center mb-10'> 
    <div className='flex flex-col items-center justify-center pt-20'>
        <img src={EmptyImg} alt='empty cart' className='w-45 object-contain object-center mx-auto '/>
        <h2 className='py-5 text-xl font-semibold'>Your Cart is Empty?</h2>
        <p className='text-sm font-medium'>You can add your products to your cart from the shop page!</p>
        <Link to={"/"}>
        <button className='bg-blue-500 py-2 px-4 text-xs text-white mt-5'>Go to Home</button>
        </Link>
    </div>
    </div>
   </>
  )
}

export default CardEmpty