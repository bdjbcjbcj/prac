import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
  let {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);
  let [cartData,setCartData]=useState([]);


  useEffect(()=>{
    let tempData=[];
    for (const items in cartItems) {
          for (const item in cartItems[items]){
            if (cartItems[items][item] >0) {
              tempData.push({
                _id:items,
                size:item,
                quantity:cartItems[items][item]
              })
            }
          }
        }
        setCartData(tempData);
  },[cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            let productData=products.find((product)=>product._id ===item._id);
            return(
              <div key={index} className=' py-3 border-t border-b text-gray-700 flex items-center justify-between gap-4 '>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div >
                    <p className='text-xs font-medium sm:text-lg'>{productData.name}</p>
                     <div className='flex items-center gap-5 mt-4'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                  </div>
                 
                </div>
                <input onChange={(e)=>e.target.value ==='' ||e.target.value === '0' ? null :updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-8 sm:max-w-18 px-1 sm:px-3 py-0.5' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size,[0])} className='w-4 mr-12 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-md'>
          <CartTotal/>
          <div className='w-full text-end'>
         <button onClick={()=>navigate('/place-order')} className='bg-black hover:text-gray-300 text-white text-sm px-8 my-7 py-3 cursor-pointer'>PROCEED TO CHECKOUT</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Cart