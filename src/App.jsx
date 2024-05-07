import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
export default function App() {
  return (
    <> 
      {/* global container */}
      <div className='flex items-center justify-center min-h-screen bg-rose-50'>
        {/* Card container */}
        <div className=' relative flex flex-col m-6 md:flex-row space-y-10 md:space-y-0 rounded-2xl shadow-2xl bg-white'>
          {/* left side */}
          <div className='p-6 md:p-20'>
            {/* Top container */}
            <div>
              <h2 className='text-4xl font-bold font-mono mb-4'>Login</h2>
              <p className='max-w-sm font-light mb-10 font-sans text-gray-600'>Login in your account to upload and download pictures, videos or musics</p>
              <input type="text" className='p-4 w-full border rounded-md border-gray-300 placeholder:font-sans placeholder:font-light ' placeholder='Enter your email address' />
            </div>
            {/* Middle container */}
            <div className='flex flex-col items-center justify-between mt-6 space-y-4 md:space-y-0 md:flex-row'>
              <div className=' text-sm font-thin text-cyan-700'>Forgot password</div>
              <button className='flex w-full md:w-auto items-center justify-center rounded-md space-x-1 border
               py-3 px-5 bg-cyan-700 text-white transition hover:translate-y-0.5 duration-150'>
                <span>Next</span>
                <GrFormNextLink className='w-6 h-6' />
              </button>
            </div>
            {/* border container */}
            <div className='border-b mt-12 border-gray-300'></div>
            <p className=' text-sm text-center py-6 text-gray-400 font-thin'>or login with</p>
            {/* bottoms buttons container */}
            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5'>
              <button className='flex justify-center items-center space-x-2 transition hover:translate-y-0.5 duration-150 border py-3 px-5 w-full  rounded-md'>
                <FaFacebook className='w-5 h-5 text-blue-700' />
                <span>facebook</span>
              </button>
              <button className='flex justify-center items-center space-x-2 transition hover:translate-y-0.5 duration-150 border py-3 px-5 w-full  rounded-md'>
                <FcGoogle className='w-5 h-5' />
                <span>google</span>
              </button>

            </div>
          </div>
          {/* right side */}
          <img src="/src/assets/bg.jpg" className='w-[430px] hidden rounded-r-2xl md:block' alt="" />
          {/* close cursor */}
          <div className='absolute -top-4 right-5 bg-cyan-700 text-white rounded-full hover:translate-y-0.5 transition duration-150 md:top-4 md:text-black md:bg-white '>
            <IoCloseOutline className='w-5 h-5' />
          </div>
        </div>

      </div>
    </>
  )
}
