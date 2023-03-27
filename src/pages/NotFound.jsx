import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componet/Navbar'
import Footer from '../componet/Footer'
function NotFound() {
    return (
        <div>
        <Navbar />
        <div className='flex flex-col text-center items-center 
      h-96  mx-36 my-28  md:ml-84'>

            <Link to="/" className='border-4  p-36 '>
                <i className='font-medium text-3xl mb-10'> c-PAGE ERROR</i>
                <button className='text-white p-3 bg-slate-700  rounded-2xl'>Go To HOMEpage</button>
            </Link>
        </div>
        <Footer/>
        </div>
    )
}

export default NotFound