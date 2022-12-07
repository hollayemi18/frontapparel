import React from 'react'
import {Link} from 'react-router-dom'
function Confirm() {
  return (
    <div className='flex flex-col text-center items-center 
      h-96  mx-36 my-28  md:ml-84'>
      <Link to="#" className='border-4  p-36 '>
        <h1 className='font-medium text-3xl mb-10'> confirm your email</h1>
        <button className='text-white p-3 bg-slate-700  rounded-2xl'>Go To Mail</button>
      </Link>
    </div>
  )
}

export default Confirm