import React from 'react'
import Shoes from '../../assets/shoes.jpg'
import Girls from '../../assets/girls.jpg'
import Boys from '../../assets/boys.jpg'
import Laptop from '../../assets/laptop.jpg'
import Handlotion from '../../assets/handlotion.jpg'
import Makeup from '../../assets/makeup.jpg'

const Gallery = () => {

  return (
    <>
<section className="text-gray-600 body-font">
<div className='text-center '>
        <h2 className='text-center text-gray-900 font-semibold text-3xl'>Gallery's</h2>
    </div>
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-y-3 transtion duration-500">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={Shoes}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={Girls}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={Boys}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={Laptop}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={Handlotion}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={Makeup}/>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Gallery