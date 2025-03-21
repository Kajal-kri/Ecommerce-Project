import { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import AllProduct from './components/AllProducts/AllProduct'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FirebaseAuth/FirebaseAuth'
import SingleProduct from './pages/Singleproduct/SingleProduct'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
// import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [promocode, setPromocode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [invalid, setInvalid] = useState('Invalid PromoCode')
  const [username, setUserName] = useState('')

  //add to cart

  const addToCart = (product)=> {

    const isProductExist = cart.find((findItem) => findItem.id === product.id)
    if(isProductExist){
      const upDateCart = cart.map((item)=>(
        item.id === product.id ? {...item, Quantity:item.Quantity+1} : item
      ))
      setCart(upDateCart);
    }else{
      setCart([...cart, {...product, Quantity:1}] )
      toast.success('Product added to cart')
    }
    console.log(cart)
  }

  //increase quantity 
  const handleInc = (id)=>{

    const incQuantity = cart.map((item)=>(
      item.id === id ? {...item, Quantity:item.Quantity+1} : item
    ))
    setCart(incQuantity)
  }

  //decrease quantity
  const handleDec = (id)=>{

    const decQuantity = cart.map((item)=>(
      item.id === id && item.Quantity >1 ? {...item, Quantity:item.Quantity-1} : item
    ))
    setCart(decQuantity)
  }


  //handle remove
  const handleRemove = (id) =>{
    const removeItem = cart.filter((item)=>item.id !== id)
    setCart(removeItem)
  }

  //calculate total price
  const getTotalPrice = () =>{
    const totalPrice = cart.reduce((total, cartReduceItem) =>{
      return total + cartReduceItem.price * cartReduceItem.Quantity
    }, 0);
    return totalPrice-discount;
  }
  
  //promo code
  const applyPromocode = ()=>{
    if(promocode === 'Discount10'){
      setDiscount(getTotalPrice()*0.1)
      setPromocode("")
      setInvalid("")
    }else{
      setInvalid(invalid)
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })

  },[])

  return (
    <>
     <div>
      <BrowserRouter>
      <Navbar cart={cart} username={username}/>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart 
         cart={cart}
         handleInc={handleInc} 
         handleDec={handleDec}
         handleRemove={handleRemove} 
         getTotalPrice={getTotalPrice}
         applyPromocode={applyPromocode}
         promocode={promocode}
         setPromocode={setPromocode}
         invalid={invalid}
         />}/>
          <Route path='/singleproduct/:productId' element={<SingleProduct addToCart={addToCart}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        <Route path='/allproduct' element={<AllProduct addToCart={addToCart}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Toaster/>
     <Footer/>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
