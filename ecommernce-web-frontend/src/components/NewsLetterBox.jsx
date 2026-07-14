import React from 'react'

function NewsLetterBox() {
  let  OnSubmitHandler=(event)=>{
    event.preventDefault()
    }
  return (
    <div className='text-center '>
       <p className=' text-2xl font-medium text-gray-800'> Subscribe now & get 20% off</p>
       <p className='text-gray-400 my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita possimus.</p>
      <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex gap-3 items-center mx-auto my-6 border pl-3'>
        <input  className='w-full sm:flex outline-none'  type="email" placeholder='Enter Your Email ' required />
        <button type='submit' className='py-3 px-6 bg-black text-white cursor-pointer' >Subscribe</button>
       </form>
    </div>
  )
}

export default NewsLetterBox