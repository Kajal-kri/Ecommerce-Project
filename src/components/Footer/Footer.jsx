import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
  <>
  <footer className='bg-black text-white'>
    <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col'>
        <div className='w-64 md:mx-0 mx-auto text-center md:text-left'>
            <h3 className='text-2xl font-bold'>Comecommerse</h3>
        </div>

        <div className='flex flex-grow flex-wrap md:pl-20 -mb-10 md:mt-0 md:text-left text-center'>
            <div className='lg:w-1/4 md:w-1/2  w-full px-4'>
                <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Menu</h2>
            <ul className='list-none mb-10'>
                <li className='mt-1'>Features</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>News Blog</li> 
                <li className='mt-1'>Login</li>
            </ul>
            </div>

            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Menu</h2>
            <ul className='list-none mb-10'>
                <li className='mt-1'>Features</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>Login</li>
            </ul>
            </div>

            <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
                <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Menu</h2>
            <ul className='list-none mb-10'>
                <li className='mt-1'>Features</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>Login</li>
            </ul>
            </div>

            <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
                <h2 className='title-font font-medium tracking-widest text-lg mb-3'>Menu</h2>
            <ul className='list-none mb-10'>
                <li className='mt-1'>Features</li>
                <li className='mt-1'>Info Center</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>Login</li>
            </ul>
            </div>
        </div>
    </div>

    <div className='bg-gray-500 text-white'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p  className='text-sm text-center sm:text-left'>@2022 Copyright Comecommerce</p>
            <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-3'>
                <span className='text-2xl'><IoLogoFacebook /></span>
                <span className='text-2xl'><FaInstagram /></span>
                <span  className='text-2xl'><FaSquareXTwitter /></span>
            </p>
        </div>
    </div>
  </footer>
  </>
  )
}

export default Footer