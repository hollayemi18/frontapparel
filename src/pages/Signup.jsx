import React from "react";
import { useState } from "react";
import eas8 from '../img/as14.png'
import ease9 from '../img/ease9.png'

import { Link ,useNavigate} from "react-router-dom";
import newRequest from "../utilies/newRequest";

const Register = () => {
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirm_password , setConfirm_password] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const registerHandle= async (e)=>{
  e.preventDefault()
    try {
      
      const reg = await newRequest.post('/register',{
        username,email,password,confirm_password
      })
      
      if(reg && password === confirm_password){
        navigate('/login')
      }else{
       return setError("password not match")
      }
    } catch (err) {
      setError("somethiing went wrong")
    }
  }
    const date = new Date();
  const year = date.getFullYear();
  return (
    <div  >
          
      <div className=" md:mx-96  " >
        <h2
          className="ml-10 flex flex-row mt-6 text-color1 font-serif 
      font-bold text-4xl"
        >
          <img src={eas8} alt="" width={60} height={60} />
          <img src={ease9} alt="" width={60} height={60} />
          
        </h2>
        <h4 className="text-black font-semibold pt-1 text-3xl  text-center">
          <i>R<i className="text-green-900">e</i>gist<i className="text-green-900">e</i>r</i>
        </h4> 
        <div
          className="border-2 shadow-lg mt-1 mx-6"
        >
         <div className="pt-8 mx-10 text-center font-bold text-red-400">{error && error}</div>
        
          <form onSubmit={registerHandle}
            className="flex flex-col gap-6 px-12 pb-16 pt-6">
               <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl"
              >
                Username
                 </label>
              <input
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl"
              >
                Email
                 </label>
              <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
                
              />
            </div>
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl "
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
                
              />
            </div>
                        <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl "
              >
               Confrim Password
              </label>
              <input
                type="password"
                value={confirm_password}
                onChange={(e)=>{setConfirm_password(e.target.value)}}
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
          
              />
            </div>
            <div className="ml-16 md:mx-10">
              <button type="submit" 
                 className="bg-black ml-2
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 my-4 px-8"
              >Sign Up</button>
         
            </div>
            <div className="mt-2 flex flex-row text-center items-center justify-evenly">
              <p className="text-sm  text-red-900 font-normal ">Already a User?  
                <button className="bg-black ml-2
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8">
                  <Link
                to="/login"
                className="mb-1 px-4 text-lg font-medium no-underline text-white"
              >
                Login
              </Link>
                </button>
              </p>
            </div> 
          </form>
        </div>
            <h5 className="text-center mt-2">&copy; easetech {year}</h5>

      </div>
    </div>
  );
};

export default Register;