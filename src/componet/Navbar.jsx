import React from 'react'
import { useState } from 'react';
import eas8 from '../img/as14.png'

function Navbar() {
  const [navbar, setNavbar] = useState(false);
    return (
        <div >
            <nav className="w-full bg-white text-center shadow-md">
                <div className="justify-between px-1 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-1 md:py-5 ">        
                                <a className='flex flex-row no-underline'>
                                     <img src={eas8} className="h-16 w-14"/>
                                    <h2 className="mt-4 font-serif font-extrabold p2-6 text-orange-500 md:text-5xl text-4xl">Ease
                                    </h2>       
                                </a>
                            
                            <button className='p-2 mb-1  ml-32 leading-loose text-xs 
                    text-center text-white font-semibold bg-slate-800 rounded-xl md:hidden' > Get started</button>
                            <div className="md:hidden">
                                <button
                                    className="text-black rounded-2xl"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 mr-3 h-16 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-3 w-8 h-16 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block  w-full md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <button type="submit" className='bg-blue-300 rounded-lg px-4 py-2 text-lg text-orange-600'> sign in</button>
                                <li className="text-black text-center font-semibold">Explore
                                </li>
                                <li className="text-black text-center font-semibold">Categories
                                </li>
                                <li className="text-black text-center font-semibold">Why Ease
                                </li>
                                <li className="text-black text-center font-semibold">Blog
                                </li>
                                <li className="text-black text-center font-semibold ">Contact US
                                </li>
                            </ul>



                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800" >
                            Get Started
                    </div>
                </div>
            </nav>
            </div>
     )
}

export default Navbar