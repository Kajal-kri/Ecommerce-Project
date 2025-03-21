import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import toast from 'react-hot-toast';


const Navbar = ({cart, username}) => {
    const [open, setOpen] = useState(false)

    const handleMenuClick = () => {
        open === false ?  setOpen(true) :  setOpen(false)
    //   setOpen(true)
    }

    const handleLogout = () =>{
        auth.signOut().then(() => {
            toast.success("Logout succesfully")
      // Sign-out successful.
      }).catch((error) => {
        toast.error("Logout error")
     // An error happened.
    });

    }

    
  return (
    <>
    <div>
        <header className=' border-b border-gray-200 bg-white fixed top-0 w-full z-10'>
            <div className='container mx-auto p-5 flex justify-between items-center'>
                <div> <h2 className='text-2xl text-black font-bold cursor-pointer'>Ecommerce</h2> </div>
               <div className='hidden lg:block'>
                <ul className='flex items-center text-lg '>
                    <Link to='/'>
                    <li className='hover:text-gray-900 hover:underline mr-5 cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/allproduct">
                    <li className='hover:text-gray-900 hover:underline mr-5 cursor-pointer'>All Products</li>
                    </Link>
                    <Link to={'/about'}>
                    <li className='hover:text-gray-900 hover:underline mr-5 cursor-pointer'>About</li>
                    </Link>
                    <Link to={'/contact'}>
                    <li className='hover:text-gray-900 hover:underline mr-5 cursor-pointer'>Contact Us</li>
                    </Link>
                </ul>
                </div>

                <div className='flex items-center gap-4'>
                    {
                       username ? (<> <Link to='/login'>
                        <button className='inline-flex items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs cursor-pointer' onClick={handleLogout}>Logout</button>
                        </Link>
                        <span className='text-gray-900 text-sm'>{username}</span> </>) : ( <Link to='/login'>
                            <button className='inline-flex items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs cursor-pointer'>Login</button>
                            </Link>)
                    }
                    {/* <Link to='/login'>
                    <button className='inline-flex items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xs'>Login</button>
                    </Link>
                    <span className='text-gray-900 text-sm'>{username}</span> */}
                    
                    <Link to='/cart'>
                    <button className='relative'>
                    <span className='absolute top-[-5px] right-0 text-white items-center bg-red-500 rounded-full px-1 text-xs cursor-pointer'>{cart.length}</span>
                    <FaShoppingCart size={24}/>
                    </button>
                    </Link>
                    
                    {
                        open ? "":  <div className='text-gray-900 cursor-pointer lg:hidden'>
                        <RxHamburgerMenu size={24} onClick={handleMenuClick}/>
                       </div>
                    }
                    {/* <div className='text-gray-900 cursor-pointer lg:hidden'>
                    <RxHamburgerMenu size={24} onClick={handleMenuClick}/>
                   </div> */}
                </div>
            </div>

            {
                open ? <div >
                <ul className='flex flex-col gap-10 text-center bg-[red] absolute z-7 left-0 h-screen w-full lg:hidden top-[73px] items-center justify-center text-[white] text-2xl'>
                <Link to='/'>
                    <li className='hover:text-gray-900 cursor-pointer' onClick={handleMenuClick}>Home</li>
                    </Link>
                    <Link to="/allproduct">
                    <li className='hover:text-gray-900 cursor-pointer' onClick={handleMenuClick}>All Products</li>
                    </Link>
                    <Link to="/about">
                    <li className='hover:text-gray-900 cursor-pointer' onClick={handleMenuClick}>About</li>
                    </Link>
                    <Link to="/contact">
                    <li className='hover:text-gray-900 cursor-pointer' onClick={handleMenuClick}>Contact Us</li>
                    </Link>
                </ul>
                <div>

                <button className='absolute right-0 text-white z-10 p-2'>
                    <RxCross2  size={40} onClick={handleMenuClick}/>
                    </button>
                    </div>
            </div> 
            : ''
            }

        </header>
    </div>
    </>
  )
}

export default Navbar