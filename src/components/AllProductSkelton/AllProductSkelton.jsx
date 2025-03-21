import React from 'react'

const AllProductSkelton = () => {
    const arrayData = new Array(10).fill("")
  return (
    <div>
      <div className='container py-20 mx-auto '>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:pl-[27px] sm:px-[20px] px-[15px] '>  
      {
        arrayData.map((emptyitem,i)=>(
            <div className=' border-gray-600 rounded-lg  p-4  shadow-md'   >       
            <div className='w-full h-[180px] bg-[#ccc]'></div>
            <div className='mt-4'>  
            <div className= "overflow-hidden cursor-pointer">
            <p className='bg-[#ccc] text-blue-200 text-center px-4 py-2 font-semibold w-[120px] h-[20px] text-lg inline-block'></p>
            <span className=' bg-[#ccc] px-4 py-2 block mt-1 text-sm text-white w-[40px] h-[20px]'></span>
            <div className='flex justify-between'>
            <p  className='bg-[#ccc] px-4 py-2 block mt-2 text-sm w-[120px] text-white'></p>
           <button className='bg-[#ccc] px-4 py-4 block mt-2 text-sm w-[120px] text-white'></button>
            </div>
            </div>
            </div>
          </div>
        ))
      }    
      
    </div>
    </div>
        </div>
  )
}

export default AllProductSkelton