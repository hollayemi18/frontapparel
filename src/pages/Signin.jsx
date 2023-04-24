  import React from "react";
import { useState } from "react";
import eas8 from '../img/as14.png'
import { Link } from "react-router-dom";
const Login = () => {
  


  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="md:mx-96">
        <h2
          className="ml-10 flex flex-row mt-6 text-color1 font-serif 
      font-bold text-4xl"
        >
          <img src={eas8} alt="" width={40} height={40} />
          <i>E</i>ase
        </h2>
        <h4 className="text-black font-semibold pt-3 text-3xl  text-center">
          <i>Login</i>
        </h4> 
        <div
          className="bg-green-700 shadow-lg mt-2 mx-6"
        >
        
          <form onSubmit
            className="flex flex-col gap-6 px-12 py-16">
            <div className="flex flex-col gap-2 md:mx-16">
  
              <label
                htmlFor=""
                className="pl-5 text-white text-lg font-bold md:text-2xl"
              >
                Email
                 </label>
              <input        
                type="email"
                className="rounded-full text-xl pl-8 text-black bg-yellow-50 border-none h-10 md:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-white text-lg font-bold md:text-2xl "
              >
                Password
              </label>
              <input
                type="password"
                className="rounded-full text-xl pl-8 text-black bg-yellow-100  border-none h-10 md:text-sm"
              />
            </div>
            <div className="ml-16 md:mx-10">
              <button type="submit" 
                 className="bg-black ml-4
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8"
              >login</button>
         
            </div>
              <div className="text-center">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div>

            <div className="mt-2 flex flex-row text-center items-center justify-evenly">
              <p className="text-sm  font-normal">Not a memeber? </p>

              <button className="bg-black ml-4
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8">  
                <Link
                to="/register"
                className="mb-1 text-lg font-medium text-white no-underline"
              >
                Register
              </Link>
              </button>
              
            </div>
            
          </form>
        </div>
            <h5 className="text-center mt-2">&copy; easetech {year}</h5>
      </div>
    </div>
  );
};

export default Login;
