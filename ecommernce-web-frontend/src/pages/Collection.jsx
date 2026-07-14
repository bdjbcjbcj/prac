import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';


function Collection() {
  let { products,search,showSearch }=useContext(ShopContext);
  let [showFilter,setShowFilter]=useState(false);
  let [filterProducts,setFilterProducts]=useState([]);
  let [Category,setCatogory]=useState([]);
  let [subCategory,setSubCategory]=useState([]);
  let [sortType, setSortType] = useState("relevant");

  let toggleCategory=(e)=>{
    if (Category.includes(e.target.value)) {
      setCatogory(prev=> prev.filter(item=> item !== e.target.value))
    }else{
      setCatogory(prev => [...prev, e.target.value])
    }
  }
  
  let toggleSubCategory=(e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
let applyFilter = () => {
  let productsCopy = products.slice();
if (search && showSearch) {
  productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))  
}
  // Category filter
  if (Category.length > 0) {
    productsCopy = productsCopy.filter(item =>
      Category.includes(item.category)
    );
  }

  // SubCategory filter
  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter(item =>
      subCategory.includes(item.subCategory)
    );
  }
  
  setFilterProducts(productsCopy);
}
let sortProducts =()=>{
let fpCopy =filterProducts.slice();
switch(sortType){
  case 'low to high':
    setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
    break; 
  case 'high to low':
    setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
    
    break;
    default:
    applyFilter();
    break;
}
};

    useEffect(()=>{
      setFilterProducts(products);
    },[products])

    useEffect(()=>{
      applyFilter();
      
    },[Category,subCategory,search,showSearch])

    useEffect(()=>{
      sortProducts();
    },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter opt */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 flex items-center text-xl gap-2 cursor-pointer'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 py-3 pl-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block` }>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>

          </div>
        </div>
        {/* SUbtag FIlter */}
         <div className={`border border-gray-300 py-3 pl-5 my-6 ${showFilter ? '' : 'hidden'} sm:block` }>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>

          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* product sort */}
          
            <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
              <option value="relevant">Sort By:relevant</option>
              <option value="low to high">Sort By:low to high</option>
              <option value="high to low">Sort By:high to low</option>
            </select>
          
        </div>
        {/* Products filters */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((items,index)=>(
              <ProductItems key={index} name={items.name} id={items._id} price={items.price} image={items.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection