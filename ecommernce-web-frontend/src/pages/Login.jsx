import React, { useState } from 'react'

function Login() {
  let [currentState,setCurrentState]=useState('Login');
  let onSubmitHandler=async(event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col mt-14 items-center w-11/12 sm:w-96 m-auto gap-4 text-gray-600'>
      <div className='inline-flex items-center gap-3 mt-10 mb-2'>
        <h1 className='prata-regular text-3xl'>{currentState}</h1>
        <hr className='border-none h-0.5 w-8 bg-gray-800' />
      </div>
      {currentState==='Login' ? '':<input type="text" className='w-full px-3 py-2 border border-gray-300' placeholder='Name' required />}
      
      <input type="email" className='w-full px-3 py-2 border border-gray-300' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-300' placeholder='Password' required />
      <div className='flex justify-between w-full -mt-2 text-sm'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          currentState==='Login'
          ? <p onClick={()=>setCurrentState('SignUp')} className='cursor-pointer'>Create Acoount</p> : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-gray-900 text-white py-2 px-8 mt-4 font-light cursor-pointer'>
        {
          currentState==='Login' ? 'Sign In':'Sign Up'
        }
      </button>
    </form>
  )
}

export default Login