import React from "react";
import newRequest from "../utilies/newRequest";
import { useState } from "react";
import eas8 from '../img/as14.png'
import ease9 from '../img/ease9.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

const handleSubmit= async (e)=>{
  e.preventDefault()
try {
  if(!email  || !password){
    return toast.error("fields  cannot be empty")
  }
    const res = await axios.post("http://localhost:8080/login", {
    email,
    password
  },{withCredentials: true})
  if(res){
    navigate('/dashboard')
  }
} catch (error) {
  return toast.error("Email or Password is incorrect")
}
}
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      
      <div className="md:mx-96">
        <h2
          className="ml-10 flex flex-row mt-6 text-color1 font-serif 
      font-bold text-4xl"
        >
          <img src={eas8} alt="" width={60} height={60} />
          <img src={ease9} alt="" width={60} height={60} />
          
        </h2>
        <h4 className="text-black font-semibold pt-3 text-3xl  text-center">
          <i>Login</i>
        </h4> 
        <div
          className="border-2 shadow-lg mt-2 mx-6"
        >
      <ToastContainer />
        
          <form onSubmit={handleSubmit}

            className="flex flex-col gap-6 px-12 pt-8 pb-16">
            <div className="flex flex-col gap-2 md:mx-16">
  
              <label
                htmlFor=""
                className="pl-5 text-black text-lg font-bold md:text-2xl"
              >
                Email
                 </label>
              <input    
              value={email}
                onChange={e=>setEmail(e.target.value)}    
                type="email"
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
                
              />
            </div>
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-black text-lg font-bold md:text-2xl "
              >
                Password
              </label>
              <input
              value={password}
                onChange={e=>setPassword(e.target.value)}  
                type="password"
                className="rounded-full text-xl pl-8 text-black shadow-lg border-green-900 h-10 md:text-sm"
              
              />
            </div>
            <div className="ml-16 md:mx-10">
              <button type="submit"
                 className="bg-black ml-4
        hover:bg-white hover:text-color1  text-white rounded-lg my-4 py-2 px-8"
              >login</button>
         
            </div>
              <div className="text-center">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover</Link></span>
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
