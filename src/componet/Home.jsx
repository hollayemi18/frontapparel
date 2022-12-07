import React from 'react'
import img1 from '../img/img1.png'
import { Link } from 'react-router-dom'
import { useState } from "react"
import eas2 from '../img/eas2.jpg'
//import eas10 from '../img/eas10.jpg'
//import eas4 from '../img/eas4.jpg'
//import eas3 from '../img/eas3.jpg'
import Accordion from './Accordion'

const Home = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div >
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
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-color1 text-center hover:text-indigo-200">
                                    <Link to={"/ease"}>Why Ease</Link >
                                </li>
                                <li className="text-color1 text-center hover:text-indigo-200">
                                    <Link to={"/blog"}>Blog</Link >
                                </li>
                                <li className="text-color1 text-center hover:text-indigo-200">
                                    <Link to={"/contact"}>Contact US</Link >
                                </li>
                            </ul>



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
            <div className="container flex flex-col md:flex-row items-center px-10 mx-auto mt-3 space-y-0 md:space-y-0">

                <div className="flex flex-col  space-y-1 md:w-1/2">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="max-w-md text-2xl text-center md:text-5xl md:text-left">
                            Bringing <i className="text-black font-bold">fashion</i><br></br> and great
                            <i className="text-color1 font-medium"> fit</i> to
                            your<br></br> doorstep
                        </h2>
                        <Link className="bg-yellow-800 text-yellow-50 py-1 px-8 
            text-2xl font-extrabold rounded-2xl my-6" to={"/login"}> Login</Link>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="skew-x-3 shadow-xl " src={eas2} alt="" />
                </div>
            </div>

            <div className="flex flex-col mt-10 mx-100">
                <div className="mb-4 text-2xl text-center font-semibold">
                    <u className="font-bold text-indigo-800">Features</u>
                </div>

                <div className="mt-2 lg:px-30 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M10.5 18a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                                <path fillRule="evenodd"
                                    d="M7.125 1.5A3.375 3.375 0 003.75 4.875v14.25A3.375 3.375 0 007.125 22.5h9.75a3.375 3.375 0 003.375-3.375V4.875A3.375 3.375 0 0016.875 1.5h-9.75zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 016 19.125V4.875z"
                                    clipRule="evenodd" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-semibold text-color1">ONLINE ORDER</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path
                                    d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-semibold text-color1">PICKUP AND DELIVERY</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                <path fillRule="evenodd"
                                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                    clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-semibold text-color1">AFFORDABLE PRICE</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce  flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path
                                    d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-semibold text-color1">DESIGN CONSULTATION</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce  flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                    clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-semibold text-color1">CONVENIENCE</p>
                        </div>
                    </div>
                    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">

                        <div className="ml-10 mb-0">

                            <Link to="/explore" className="block animate-bounce 
                        px-6 py-2 text-white bg-indigo-900 rounded-full baseline">Explore</Link>
                        </div>

                    </div>
                </div>
            

            </div>
            <div className="px-5 m-10  text mt-8 text-gray-300 rounded-br-full rounded-tl-full shadow-2xl bg-gray-100">
                <h3 className="mb-2 text-center text-1xl font-semibold text-color1">How we work : </h3>
                <h3 className="mb-8 text-center text-1xl font-bold text-indigo-900"><u>PICK-UP</u></h3>
                <ul className="grid place-content-center md:grid-cols-5 sm:grid-cols-2 ">
                    <li className="flex  ">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Log In </div>
                            <p className="max-w-xs py-2 text-sm text-color1">create an account or log in with your email and
                                password </p>
                        </div>
                    </li>
                    <li className="flex">

                        <div className='bg-white rounded-3xl p-2 shadow-2xl'>
                            <div className="text-2xl font-bold text-right text-indigo-800">Go To Schedule</div>
                            <p className="max-w-xs py-2 text-sm text-color1">input necessary info as provided and submit</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Breath </div>
                            <p className="max-w-xs py-2 text-sm text-color1">Relax and wait for our representative to come
                                knocking at your door</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='bg-white rounded-3xl p-2 shadow-2xl'>
                            <div className="text-2xl font-bold text-right text-indigo-800">Talk To Our Rep </div>
                            <p className="max-w-xs py-2 text-sm text-color1">Have a chat with our rep, getting your details </p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Relax </div>
                            <p className="max-w-xs py-2 text-sm text-color1">Sit back and await your package at your
                                doorstep </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="-pt-100 m-10 ">
                <h3 className="mb-2 text-center text-1xl font-semibold text-color1">How we work : </h3>
                <h3 className="mb-8 text-center text-1xl font-bold text-indigo-900"><u>ORDERING ONLINE</u></h3>
                <ul className="grid place-content-center md:grid-cols-3 sm:grid-cols-2 gap-2">
                    <li className="flex bg-slate-400-50 shadow-2xl p-2">
                        <div className="pr-2 text-2xl  text-indigo-800">1.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Log In </div>
                            <p className="max-w-xs py-1 text-sm text-color1">create an account or log in with your email and
                                password </p>
                        </div>
                    </li>
                    <li className="flex bg-slate-50  rounded-full shadow-2xl p-2">
                        <div className="pr-2 text-2xl  text-indigo-800">2.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Order A Delivery </div>
                            <p className="max-w-xs py-2 text-sm text-color1">navigate or click on order Link delivery</p>
                        </div>
                    </li>
                    <li className="flex bg-slate-400-50 shadow-2xl p-2  rounded-full">
                        <div className="pr-2 text-2xl  text-indigo-800">3.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Add Style or design</div>
                            <p className="max-w-xs py-2 text-sm text-color1">You can choose your design from cart or from phone
                                gallery </p>
                        </div>
                    </li>
                    <li className="flex bg-slate-50 shadow-2xl p-2">
                        <div className="pr-2 text-2xl  text-indigo-800">4.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Add Material</div>
                            <p className="max-w-xs py-2 text-sm text-color1">Quality material are displayed at the ease online
                                market,choose by clicking </p>
                        </div>
                    </li>
                    <li className="flex bg-slate-400-50 rounded-full shadow-2xl p-2">
                        <div className="pr-2 text-2xl  text-indigo-800">5.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Add Measurement </div>
                            <p className="max-w-xs py-2 text-sm text-color1">input your body size,using our A.I model or by
                                watching our video on how to take one </p>
                        </div>
                    </li>
                    <li className="flex bg-slate-50 rounded-full shadow-2xl p-2">
                        <div className="pr-2 text-2xl  text-indigo-800">6.</div>
                        <div>
                            <div className="text-2xl font-bold text-indigo-800">Place Order</div>
                            <p className="max-w-xs py-2 text-sm text-color1 ">Sit back and await your package at your
                                doorstep </p>
                        </div>
                    </li>
                </ul>
            </div>
              <div>
                <h1 className='text-center text-4xl text-color5'>
                    Testimony's
                </h1>
          <div className="w-full  rounded-lg shadow-md lg:max-w-sm">
            <div className="p-4"> 
                <p className="mb-2  px-12 leading-normal">
                    “On the Windows talking painted pasture yet its express parties use. 
                    Sure last upon he same as knew next. Of believed or diverted no.”


                </p>
               <div className='text-black text-center '>
                 <div>
                    <h5 className='text-color1'>
                        O Taylor
                    </h5>
                </div>
               <div>
                    <h2>
                        Nigeria
                    </h2>
                </div>

               </div>
            </div>
        </div>

                <Accordion />

            <footer className="bg-gray-900 text-center items-center justify-center text-white md:grid md:grid-cols-6 ">
                <aside className="hidden sm:relative sm:col-span-2 sm:block">
                    <img alt="Art" src={eas2} className="absolute inset-0 h-full  object-cover" />
                </aside>

                <div className="px-4 pt-6 pb-5 sm:px-6 lg:col-span-3 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <p className="font-medium">
                                <span className="text-xs uppercase tracking-widest"> Email : </span>

                                <Link className="block text-2xl hover:opacity-75 sm:text-3xl" href="">
                                    easeapparel@gmail.com
                                </Link>
                                <span className="text-xs uppercase tracking-widest"> Call : </span>

                                <Link className="block text-2xl hover:opacity-75 sm:text-3xl" href="">
                                    08076771973
                                </Link>
                            </p>

                            <ul className="mt-8 space-y-2 text-sm">
                                <li>Monday to Friday: 8am</li>
                                <li>Weekend: 10am</li>
                            </ul>

                            <div className="mt-16 flex flex-row items-center justify-center gap-3">
                                <Link className="rounded-full border border-white/25 p-2 hover:opacity-75" href="" target="_blank"
                                    rel="noreferrer">
                                    <span className="sr-only"> Facebook </span>

                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd" />
                                    </svg>
                                </Link>

                                <Link className="rounded-full border border-white/25 p-2 hover:opacity-75" href="" target="_blank"
                                    rel="noreferrer">
                                    <span className="sr-only"> Instagram </span>

                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd" />
                                    </svg>
                                </Link>

                                <Link className="rounded-full border border-white/25 p-2 hover:opacity-75" href="" target="_blank"
                                    rel="noreferrer">
                                    <span className="sr-only"> Twitter </span>

                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Link>



                            </div>
                        </div>

                        <div className="grid grid-cols-1sss gap-4  sm:grid-cols-1 md:ml-80">
                            <div>
                                <nav className="mt-4 flex flex-col space-y-2 text-base font-bold text-gray-100">
                                    <Link className="hover:opacity-75 " to={'/login'}> Learning </Link>
                                    <Link className="hover:opacity-75" to={'/login'}> Apply </Link>
                                    <Link className="hover:opacity-75" to={'/login'}> About </Link>
                                    <Link className="hover:opacity-75" to={'/login'}> Blog</Link>
                                </nav>
                            </div>


                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-800 pt-1 md:ml-48">

                        <div className="text-center">
                            <p className="mt-4 sm:mt-0"><span class="text-color1">Eastech </span> &copy; 2022 all rights preserved </p>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </div>

    )
}

export default Home