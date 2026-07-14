import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-2 text-center py-28 '>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-3  ' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer hassle policy for exchange</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-3  ' />
            <p className='font-semibold'>7 Days return Policy</p>
            <p className='text-gray-400'>We provide 7 days return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-3  ' />
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy