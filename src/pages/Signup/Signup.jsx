import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Ecommerce from '../../assets/ecommerce.jpg'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../FirebaseAuth/FirebaseAuth'

const Signup = () => {

  const navigateLogin = useNavigate()
  const [userSignup, setUserSignup] = useState({username:"", email:"", password:""})

  const handleChange = (e) =>{
    setUserSignup({...userSignup, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(userSignup)
    if(!userSignup.username || !userSignup.email || !userSignup.password){
     return toast.error("Please fill all the fields")
    }
    else{
      createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
      .then(async(res)=> {
        const user = res.user
        await updateProfile (user,{
          displayName: userSignup.username,
        })
        navigateLogin("/login")
      })
      .catch((err)=>toast.error(err.message))
    }
  }

  return (
    <>

<div className='relative'>
           <img src={Ecommerce} alt="logo" className="object-cover w-full h-[200px] object-center rounded-lg"/>
           <div className='w-full md:w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.3]' ></div>
          <div className='absolute top-20 left-30 ' >
            <h2 className='md:text-5xl text-white font-semibold text-3xl' >Sign up</h2>
          </div>
       </div>

       <div className="container px-5 py-24 mx-auto flex">
    <div className=" mx-auto lg:w-1/3 md:w-1/2 bg-gray-400 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-2xl mb-5 font-medium title-font">Sign up</h2>
      <form >
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-[white]">Name</label>
        <input type="text" name="username" autoComplete="username" value={userSignup.username} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
         focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange}/>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-[white]">Email</label>
        <input type="email" name="email" autoComplete="email" value={userSignup.email} className="w-full bg-white rounded border border-gray-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8
          transition-colors duration-200 ease-in-out" onChange={handleChange}/>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-[white]">Password</label>
        <input type="password" name="password" autoComplete="new-password"  value={userSignup.password} className="w-full bg-white rounded border border-gray-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
         leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange}/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Sign Up</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Do you have an account ? {" "}
        <Link to={'/login'}>
        <button className='text-blue-600 cursor-pointer hover:text-blue-800' >Sign in</button>
        </Link>
      </p>
    </div>
  </div>
  </>
  )
}

export default Signup