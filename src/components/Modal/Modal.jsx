import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen, onClose }) => {
  const [orderDetails, setOrderDetails] = useState({
      Username: '',
      address: '',
      pincode: '',
      phone: ''
  })

  const handleChange = (e) =>{
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) =>{
    e.preventDefault(e)
    if(orderDetails.Username && orderDetails.address && orderDetails.pincode && orderDetails.phone){
      toast.success('Order Submitted Successfully')
      onClose()
    }else{
      toast.error('Please Fill All Fields')
    }
  }

  
    if (!isOpen) return null;
  return (
    
     <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center " style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className='flex items-center justify-between '>
        <h2 className="text-xl font-bold ">Form</h2>
        <RxCross2 size={24} className='text-gray-500 cursor-pointer' onClick={onClose} />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">UserName</label>
        <input type='text' className="border px-2 py-1 rounded-md w-full" name='Username' value={orderDetails.Username} onChange={handleChange}/>
        <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">Full Address</label>
        <textarea className="border px-2 py-1 rounded-md w-full" name='address' value={orderDetails.address} onChange={handleChange}/>
        <label className="block mb-2 text-sm font-medium text-gray-900">Pincode</label>
       <input type="text" className="border px-2 py-1 rounded-md w-full"  name='pincode' maxLength="6" value={orderDetails.pincode} onChange={handleChange}/>
        <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">Phone</label>
        <input type='text' className="border px-2 py-1 rounded-md w-full" name='phone' value={orderDetails.phone} onChange={handleChange}/>
        <div>
          <button className="bg-indigo-500 text-white px-2 py-1 rounded-md w-full mt-5" onClick={handleSubmit}>
            Order Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal