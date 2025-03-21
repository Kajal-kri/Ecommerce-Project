import React from 'react';
import Ecommerce from '../../assets/ecommerce.jpg'
import AboutUs from '../../assets/aboutus.jpeg'
import Innovation from '../../assets/innovation.jpeg'

const About = () => {
  return (
    <div>
         <div className='relative'>
           <img src={Ecommerce} alt="logo" className="object-cover w-full h-[200px] object-center rounded-lg"/>
           <div className='w-full md:w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.3]' ></div>
          <div className='absolute top-20 left-30 ' >
            <h2 className='md:text-5xl text-white font-semibold text-3xl' >About Us</h2>
          </div>
       </div>

       <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={AboutUs}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are?
        <br class="hidden lg:inline-block"/>and we do
      </h1>
      <p class="mb-8 leading-relaxed">The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart,
        Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce. Workplace Equality charter is built on the pillars of trust,
        inclusion, support, recognition and genuine care. Our emphasis on seeing every employee as a unique individual with unique needs, and supporting
        them in the best possible way allows them to set their own benchmarks and bring their best selves to work. 
        We ensure that everyone, irrespective of their gender, faith, belief, ethnicity, caste or sexual orientation, gets an equally powerful seat on the table.
    </p>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Technology at Flipkart
        <br class="hidden lg:inline-block"/>Innovation
      </h1>
      <p class="mb-8 leading-relaxed">The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart,
         Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce.</p>
    </div>

    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Innovation}/>
    </div>
  </div>
</section>

    </div>
  )
}

export default About