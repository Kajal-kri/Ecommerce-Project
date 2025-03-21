import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PopularProductSkelton from '../PopularProductSkelton/PopularProductSkelton'

const PopularProduct = ({addToCart}) => {
    const [popularProduct, setPopularProduct] = useState([])

    useEffect(()=>{
        const PopularProductFetch = async () => {
          try{
            const res = await axios(`https://dummyjson.com/carts/1`)
            setPopularProduct(res.data.products) 
            console.log(popularProduct)
          }catch(err){
            toast.error(err.message)
          }
          }
        PopularProductFetch()
      },[])


  return (
    <>
     <div className='mt-20 text-center '>
        <h2 className='text-center text-gray-900 font-semibold text-3xl'>Popular Products</h2>
    </div>
    {
      !popularProduct.length ? (<PopularProductSkelton/>) : (
        <section className="text-gray-600 body-font">
        <div className=" gap-4 container px-5 py-24 mx-auto">
          <div className=" flex flex-wrap justify-between ">
              {
                  popularProduct.map((popularProductItem)=>(
                      <div className="bg-[#f5eded2f] p-4 min-w-[250px] lg:w-[23%] md:w-[48%] sm:w-full shadow-md rounded-lg" key={popularProductItem.id}>
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block cursor-pointer" src={popularProductItem.thumbnail} />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer">{popularProductItem.title}</h2>
                        <p className="mt-1 cursor-pointer">${popularProductItem.price}</p>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded-md text-sm mt-3 cursor-pointer' onClick={()=>addToCart(popularProductItem)}>Add to cart</button>
                      </div>
                    </div>
                  ))
              }    
          </div>
        </div>
      </section>
      )
    }

    </>
  )
}

export default PopularProduct