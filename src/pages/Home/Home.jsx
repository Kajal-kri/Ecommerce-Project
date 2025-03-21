import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProduct from '../../components/PopularProduct/PopularProduct'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = ({addToCart}) => {
  return (
   
        <div>
            <HeroSection/>
            <Service/>
            <PopularProduct addToCart={addToCart}/>
            <Gallery/>
            <Testimonial/>
        </div>
       
  )
}

export default Home