import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal';
import CardEmpty from '../../components/CardEmpty/CardEmpty';

const Cart = ({cart, handleInc, handleDec, handleRemove, getTotalPrice, applyPromocode, promocode, setPromocode, invalid}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()
  
  return (
   <>
   {
    !cart.length ? <CardEmpty/>:  <div className=" w-[90%] mx-auto mt-[80px] ">
    <div className="flex flex-col lg:flex-row shadow-md my-10">
      <div className="w-full lg:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
        </div>
        
        {
          cart.map((itemCart)=>(
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={itemCart.id}>
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src={itemCart.thumbnail} alt="item"/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{itemCart.title}</span>
                <span className="text-red-500 text-xs">{itemCart.category}</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>handleRemove(itemCart.id)}>Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
            
              <button className='border px-2 py-1' onClick={()=>handleDec(itemCart.id)}>-</button>
              <button className=' px-2 '>{itemCart.Quantity}</button>
              <button className='border px-2 py-1' onClick={()=>handleInc(itemCart.id)}>+</button>
  
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{itemCart.price} ₹ </span>
            <span className="text-center w-1/5 font-semibold text-sm">${itemCart.price * itemCart.Quantity}</span>
          </div>
          ))
        }


        <p className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer" onClick={()=>navigate('/allproduct')}>
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </p>
      </div>

      <div id="summary" className="w-full lg:w-1/4 px-8 py-10 bg-[#f6f6f6]">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">{cart.length} Items</span>
          <span className="font-semibold text-sm">{getTotalPrice ()}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label type="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border border-gray-400 outline-none" value={promocode} onChange={(e)=>setPromocode(e.target.value)}/>
          
          {
            promocode && promocode !== 'Discount10' ? (<span className="text-red-500 text-xs">Invalid Promocode</span>    
            ):(
           <span className="text-gray-600 text-xs">use Discount10</span>)
          }
          <hr/>
          {
            promocode === 'Discount10' && (<span>PromoCode apply successfully</span>)
          }
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={applyPromocode}>Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{getTotalPrice () + 10}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={() => setIsModalOpen(true)}>Checkout</button>
        </div>
      </div>

    </div>
  </div>
   }
       {/* <div className=" w-[90%] mx-auto mt-[80px] ">
    <div className="flex flex-col lg:flex-row shadow-md my-10">
      <div className="w-full lg:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
        </div>
        
        {
          cart.map((itemCart)=>(
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={itemCart.id}>
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src={itemCart.thumbnail} alt="item"/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{itemCart.title}</span>
                <span className="text-red-500 text-xs">{itemCart.category}</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>handleRemove(itemCart.id)}>Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
            
              <button className='border px-2 py-1' onClick={()=>handleDec(itemCart.id)}>-</button>
              <button className=' px-2 '>{itemCart.Quantity}</button>
              <button className='border px-2 py-1' onClick={()=>handleInc(itemCart.id)}>+</button>
  
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{itemCart.price} ₹ </span>
            <span className="text-center w-1/5 font-semibold text-sm">${itemCart.price * itemCart.Quantity}</span>
          </div>
          ))
        }


        <p className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer" onClick={()=>navigate('/allproduct')}>
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </p>
      </div>

      <div id="summary" className="w-full lg:w-1/4 px-8 py-10 bg-[#f6f6f6]">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">{cart.length} Items</span>
          <span className="font-semibold text-sm">{getTotalPrice ()}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label type="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border border-gray-400 outline-none" value={promocode} onChange={(e)=>setPromocode(e.target.value)}/>
          
          {
            promocode && promocode !== 'Discount10' ? (<span className="text-red-500 text-xs">Invalid Promocode</span>    
            ):(
           <span className="text-gray-600 text-xs">use Discount10</span>)
          }
          <hr/>
          {
            promocode === 'Discount10' && (<span>PromoCode apply successfully</span>)
          }
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={applyPromocode}>Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{getTotalPrice () + 10}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={() => setIsModalOpen(true)}>Checkout</button>
        </div>
      </div>

    </div>
  </div> */}

  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

     </>
  )
}

export default Cart