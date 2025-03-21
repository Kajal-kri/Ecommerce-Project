import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import Ecommerce from '../../assets/ecommerce.jpg'
import { Link } from 'react-router-dom'
import AllProductSkelton from '../AllProductSkelton/AllProductSkelton'

const AllProduct = ({addToCart}) => {
  const [data, setData] = useState([])
  // const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState('')
  const [allProducts, setAllProducts] = useState([])
  const [itemcard, setItemCard] = useState([])
  const [search, setSearch] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')


  useEffect(()=>{ 
      const getDataCategory = async () => {
        try{
        const res = await axios('https://dummyjson.com/products/category-list')
        setData(res.data)
       }catch(err){
        console.log(err)
       }
    }
    getDataCategory();
  },[])

  const filterProducts = (itemproduct) =>{
    setSelectedProducts(itemproduct)
    const filterdata = itemproduct? itemcard.filter((allproductitem)=>(
      allproductitem.category === itemproduct
      
    )): itemcard
    setAllProducts(filterdata)
   
  }

  //All category
  useEffect(()=>{
    const getAllCategory = async () => {
      const res = await axios('https://dummyjson.com/products')
      setAllProducts(res.data.products)
      setItemCard(res.data.products)
      
    }

    getAllCategory()
  },[])
  

  const handleSearch = (e) =>{
    const Query = e.target.value;
    setSearch(Query);

    // const filterSearch = itemcard.filter((searchfilterItem) =>
    //   searchfilterItem.title.toLowerCase().includes(Query.toLowerCase())
    // )

    // setAllProducts(filterSearch)

  }

 const handleSearchButton = () =>{
  const filterSearch = itemcard.filter((searchfilterItem) =>
    searchfilterItem.title.toLowerCase().includes(search.toLowerCase())
  )

  setAllProducts(filterSearch)
  console.log(filterSearch)
 }

 const handlePrice = () =>{
  const min = parseInt(minPrice)
  const max = parseInt(maxPrice)
  console.log(minPrice)
  const filterPrice = itemcard.filter((pricefilterItem) =>(
    (!min || pricefilterItem.price >= min) && (!max || pricefilterItem.price <= max)
  ))
  setAllProducts(filterPrice)
  
 }


  //single data
  // useEffect(()=>{ 
  //     const getData = async () => {
  //       try{
  //         if(selectedProducts){
  //           const res = await axios(`https://dummyjson.com/products/category/${selectedProducts}`)
  //           setProducts(res.data.products)
  //         }
  //      }catch(err){
  //       console.log(err)
  //      }
  //   }
  //   getData();
  // },[selectedProducts])



  return (
   <>
        <div className='relative'>
           <img src={Ecommerce} alt="logo" className="object-cover w-full h-[200px] object-center rounded-lg"/>
           <div className='w-full md:w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.3]' ></div>
          <div className='absolute top-20 left-30 ' >
            <h2 className='md:text-5xl text-white font-semibold text-3xl' >Products</h2>
          </div>
       </div>
       
     {/* filter product */}
    <div className='text-center mt-10 border-2 border-gray-400 px-2 py-10 rounded-lg mx-auto w-full max-w-[90%] md:w-260 bg-gray-200'>
    <div className='flex flex-wrap items-center justify-center gap-6 pb-10 '>
      <select onChange={(e)=>filterProducts(e.target.value)} className='border-2  border-gray-400 rounded-lg px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 focus:outline-none cursor-pointer '>
        <option className='text-black  cursor-pointer'>All Category Products</option>
     
      {
        data.slice(0,4).filter((filterItem)=>!["womens-watches","womens-shoes", "womens-dresses"].includes(filterItem)) 
        .map((itemproduct, index)=>(
          // <div key={index} >
           <option value={itemproduct} className='bg-white text-black' key={index}>
            {itemproduct}
            </option> 
          // </div>
        ))
      }
       </select>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-center gap-3 text-center '>   
      <input type="text" placeholder="Search" className="p-2 text-sm border-2 border-gray-400 outline-none bg-gray-100 md:w-150" value={search} onChange={handleSearch}/> 
      <button className='p-2 bg-red-500 text-white text-center ml-4 hover:bg-red-700 md:w-auto' onClick={handleSearchButton}>Search Product</button>
    </div>

    <div className='flex flex-col md:flex-row items-center justify-center gap-3 text-center mt-8'>
    <input type='text' placeholder='min Price' className='border-2 border-gray-400 outline-none px-2 py-2 ml-3 bg-gray-100 md:w-auto' value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}/> 
    <input type='text' placeholder='max Price' className='border-2 border-gray-400 outline-none px-2 py-2 ml-3 bg-gray-100 md:w-auto' value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
    <button className='bg-red-500 text-white px-2 py-2 ml-3 hover:bg-red-700 md:w-auto' onClick={handlePrice}>Filter by price</button> 
    </div>
    </div>

    



    {/* Products items */}
    {/* <section className='text-gray-600 body-font'>
    <div className='lg:px-45 py-20 mx-auto'>
    <div className='flex flex-wrap gap-4 w-full md:pl-[27px]  items-center'> 
      {
        products.map((items,index)=>(
          <div key={index}className='border-4 p-4 text-center w-full sm:w-[calc(30%-20px)] md:w-[calc(30%-20px)] lg:w-[calc(20%-20px)]' >
            <img src={items.thumbnail} alt='thumbnail' className='mx-auto'/>
            <div className="flex-1 overflow-hidden">
              <p className='mt-3 truncate'>Title: {items.title}</p>  
              <p>Price: {items.price}</p>
              <p>Rating: {items.rating}</p>
            </div>
           
          </div>
        ))
      }
    </div>
    </div>
    </section> */}

    {
      !allProducts.length ? (<AllProductSkelton/>) : (
        <div className=' py-25 mx-auto container '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:pl-[27px] sm:px-[20px] px-[15px] '>
          {
            allProducts.map((allProduct)=>(
              <div className='border-2 border-gray-600 rounded-lg  p-4 '  key={allProduct.id} >
                <Link to={`/singleproduct/${allProduct.id}`}>
                <img src={allProduct.thumbnail} alt='thumbnail' className='mx-auto h-[150px] w-full object-contain '/>
                </Link>
                <div className=" pt-4 justify-start overflow-auto cursor-pointer">
                <p >Title: {allProduct.title}</p>
                <span className='text-[white] text-xs bg-gray-400 w-[50px] px-4 py-1 text-center rounded-md '>{allProduct.price}</span>
                <div className='flex justify-between'>
                <p className='mt-1'>Rating: {allProduct.rating}</p>
                <button className="border px-2 py-1 bg-blue-500 sm:text-[15px] font-medium text-white sm:px-4 sm:py-2 transition duration-300 hover:bg-blue-600 active:scale-95  text-center cursor-pointer" onClick={()=>addToCart(allProduct)}>Add to Cart</button>
                </div>
                </div>
              </div>
            ))
          }
        </div>
        </div>
      )
    }

    {/* <AllProductSkelton/> */}
    {/* all Products */}
    {/* <div className=' py-25 mx-auto container '>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:pl-[27px] sm:px-[20px] px-[15px] '>
      {
        allProducts.map((allProduct)=>(
          <div className='border-2 border-gray-600 rounded-lg  p-4 '  key={allProduct.id} >
            <Link to={`/singleproduct/${allProduct.id}`}>
            <img src={allProduct.thumbnail} alt='thumbnail' className='mx-auto h-[150px] w-full object-contain '/>
            </Link>
            <div className=" pt-4 justify-start overflow-auto cursor-pointer">
            <p >Title: {allProduct.title}</p>
            <span className='text-[white] text-xs bg-gray-400 w-[50px] px-4 py-1 text-center rounded-md '>{allProduct.price}</span>
            <div className='flex justify-between'>
            <p className='mt-1'>Rating: {allProduct.rating}</p>
            <button className="border px-2 py-1 bg-blue-500 sm:text-[15px] font-medium text-white sm:px-4 sm:py-2 transition duration-300 hover:bg-blue-600 active:scale-95  text-center cursor-pointer" onClick={()=>addToCart(allProduct)}>Add to Cart</button>
            </div>
            </div>
          </div>
        ))
      }
    </div>
    </div> */}
    </>
  )
}

export default AllProduct