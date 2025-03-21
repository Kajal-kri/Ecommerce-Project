import React from 'react'

const PopularProductSkelton = () => {
    const arrayProduct = new Array(4).fill("")

  return (
    <>
    <div className='mt-20 text-center '>
        <h2 className='text-center text-gray-900 font-semibold text-3xl'></h2>
    </div>
        <section className="text-gray-600 body-font">
  <div className=" gap-4 container px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-between ">
        {
           arrayProduct.map((emptyarray,i)=>(
                <div className="shadow-md p-4 min-w-[250px] lg:w-[23%] md:w-[48%] sm:w-full" > 
                <div className='w-full h-[200px] bg-[#ccc] rounded-lg'></div>
              <div className="mt-4">
                <h2 className="bg-[#ccc] text-blue-200 text-center px-4 py-2 font-semibold w-[120px] h-[20px] text-lg inline-block"></h2>
                <span className=' bg-[#ccc] px-4 py-2 block mt-1 text-sm text-white w-[65px] h-[20px]'></span>
                <button className='bg-[#ccc] text-white px-4 py-4 rounded-md text-sm mt-3 cursor-pointer w-[120px]' ></button>
              </div>
            </div>
            ))
        }     
           
    </div>
  </div>
</section>
    </>
  )
}

export default PopularProductSkelton