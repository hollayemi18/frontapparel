import React from 'react'
import img1 from '../img/img1.png'
import { Link  } from 'react-router-dom'
//import { useState } from "react"
import eas2 from '../img/eas3.jpg'


function Ease() {
  //const [navbar, setNavbar] = useState(false);

  return (
    <div>
        <nav className="w-full bg-white text-center shadow-md">
            <div className="justify-between px-1 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-5 md:block">
                    <div className='flex flex-row '>
                    <img src={img1} width={40} height={40} alt="" />
                    <Link to={"/"}>
                     <h2 className="text-1xl mt-1 font-bold text-color1">EaseApparel</h2>
                        </Link >
                    </div>
                    <Link to={"/register"} className='px-2  py-2 mb-1  -mr-24 leading-loose text-xs 
                    text-center text-white font-semibold bg-indigo-800 rounded-xl md:hidden' > Get started</Link>
                        <div className="md:hidden">

                        </div>
                    </div>
                </div>
               
                <div className="hidden space-x-2 md:inline-block">
                    <Link to={"/register"}
                      
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Get Started
                    </Link >
                </div>
            </div>
        </nav>
        <div>
            <img src={eas2} alt="" />
        </div>
        <div>
            <h2 className='text-center my-6  font-2xl text-2xl text-color1'>Why EaseApparel</h2>
        </div>
        <section className='mx-10 text-md font-bold' >
            <p className='my-1 text-neutral-900 '>
                An online platform for fashion ,bringing comfort and convience as it name imply.
                <br />
                As a fashion ethusiast and a lover of fashion , we are dedicating to bring lovers of fashion 
                and native attire the best that could be offered with the simplicity of making it ease without going 
                through stress.
                <br />
                <div>
                    <p>Easeapparel is created with long time vision of creativity ,started from bed rock with lot of struggle and hardship ,
                        but with the aim of making a stress-free world, the vision keeps burning all through. 
                    </p>
                </div>
                <div>
                    <p className='mt-5'>
                        Our Aim and vision is making your wish about your sense of fashion comes true without going through stress,
                        just with tap ,Our AGENTS are right with you taking your orders .At your comfort we make your fashion wish come through
                        .
                        <br />
                        Ease offered NO DELAY, NO DISAPPOINTMENT, FAST DELIVERY, AFFORDABLE PRICE ,CLIENTS ACCOUNT TO MANAGE
                         and LOTS MORE 
                        <br />
                        To enjoy our EXCLUSIVE deal and Discounts create an account or log-in with a click
                        <p> <Link to={"/register"} className='px-10  py-4 my-10 leading-loose text-xs 
                    text-center text-white font-semibold bg-indigo-800 rounded-xl flex justify-center' > Get started</Link></p>
                    </p>
                </div>
            </p>
        </section>
    </div>
  )
}

export default Ease