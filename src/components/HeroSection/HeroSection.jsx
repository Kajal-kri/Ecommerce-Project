import React from 'react'
import Banner from '../../assets/banner.jpg'

const HeroSection = () => {
  return (
    <div className='relative mt-[80px] lg:mt-[50px] '>
        <div >
            <img src={Banner} alt='banner' className='w-full object-contain object-center'/>
        </div>
        <div className='absolute top-[30%] left-[67%] '>
            <h2 className='lg:text-4xl md:text-2xl text-xl font-bold text-[red]'>Discover Your Next Adventure!</h2>
            <p className='md:text-2xl sm:text-xl text-[15px] font-semibold md:mt-5text-center'>Shop Our Latest Arrival & Unleash Your Style</p>
        </div>
        </div>
  )
}

export default HeroSection