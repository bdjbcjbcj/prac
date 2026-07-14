import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

function RelatedProduct({Category,subCategory}) {
    let {products}=useContext(ShopContext);
    let [related,setRelated]=useState([]);

    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy= products.slice();
            productsCopy =productsCopy.filter((item)=>Category ===item.Category)
            productsCopy =productsCopy.filter((item)=>subCategory ===item.subCategory)
            setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='my-34'>
        <div className='text-center  text-3xl py-3'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
            }
        </div>

    </div>
  )
}

export default RelatedProduct