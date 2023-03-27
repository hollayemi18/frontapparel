import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
  <div className="container flex flex-col-reverse md:flex-row items-center px-10 mx-auto  space-y-0 md:space-y-0">

                <div className="flex flex-col  space-y-1 md:w-1/2">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="max-w-md text-4xl text-center font-mono md:text-5xl md:text-left">
                            Bringing <i className="text-black  font-bold">fashion</i><br></br> and great
                            <i className="text-orange-700 font-extrabold"> fit</i> to
                            your<br></br><h1 className='font-mono font-extrabold'>Doorstep</h1>
                        </h2>
                    </div>
                </div>
                <div className="flex items-center py-5">
                    
            <div className="flex space-x-1  ">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="ease search..."
                />
                <button className="px-4 text-white bg-purple-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <div className="flex items-start">

                        <div className="ml-6 mr-3 mt-2">

                            <Link to="/explore" className="block no-underline animate-bounce 
                        px-6 py-2 text-white bg-indigo-900 rounded-full baseline">Explore</Link>
                        </div>

                    </div>
            </div>       
        </div>
      </div>
          <div>
        </div>
    </div>
  )
}

export default Hero