import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
  let [method,setMethod]=useState('cod');
  let {navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col  sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-3/4 border-t'>
      {/* left side */}
      <div className='flex flex-col w-full gap-4 sm:max-w-lg'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="Number" placeholder='Zipode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="Number" placeholder='Phone No' />
      </div>
      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 max-w-lg'>
          <CartTotal/>
        </div>
        <div className='mt-10'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
        </div>
        <div className='flex flex-col gap-3 lg:flex-row'>
          <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='stripe' ? 'bg-green-400': ''}`}></p>
            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
          </div>
          <div  onClick={()=>setMethod('rozarpay')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='rozarpay' ? 'bg-red-400': ''}`}></p>
            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='cod' ? 'bg-green-400': ''}`}></p>
           <p className='text-gray-500 text-sm font-medium mx-3'>CASH ON DELIVERY</p>
          </div>

        </div>
         <div className='w-full text-end'>
         <button onClick={()=>navigate('/order')} className='bg-black hover:text-gray-300 text-white text-sm px-13 my-9 py-3 cursor-pointer'>PLACE ORDER</button>
         </div>
      </div>
    </div>
  )
}

export default PlaceOrder