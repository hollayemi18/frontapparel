  import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../img/img1.png'
import axios from "axios"
import { Formik, useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { loginValidate , passwordValidate,c_passwordValidate} from "../helper/validate";

const Register = () => {
  const formik = useFormik({
    initialValues :{
      email : '',
      password : '',
      c_password :''
    },
    validate:loginValidate,
    validate: passwordValidate,
    validate: c_passwordValidate,

    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values =>{
      console.log(values)
    }
  })


  const date = new Date();
  const year = date.getFullYear();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const submitForm = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/",(
        email, password
      ))
    } catch (error) {
      
    }

    }
  return (
    <div>
      <div className="md:mx-96">
        <h2
          className="ml-10 flex flex-row mt-6 text-color1 font-serif 
      font-bold text-4xl"
        >
          <img src={img1} alt="" width={40} height={40} />
          <i>E</i>ase
        </h2>
        <h4 className="text-black font-semibold pt-3 text-3xl  text-center">
          <i>Register</i>
        </h4> 
        <div
          className="bg-green-200 shadow-lg mt-2 mx-6"
        >
        
          <form onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6 px-12 py-16">
            <div className="flex flex-col gap-2 md:mx-16">
          <Toaster></Toaster>
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl"
              >
                Email
                 </label>
              <input
              {...formik.getFieldProps('email')}
              
                type="email"
                className="rounded-full text-xl pl-8 text-black bg-yellow-50 border-none h-10 md:text-sm"
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
              {...formik.getFieldProps('password')}
                
                type="password"
                className="rounded-full text-xl pl-8 text-color4  border-none h-10 md:text-sm"
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
              {...formik.getFieldProps('c_password')}
                
                type="password"
                className="rounded-full text-xl pl-8 text-color4  border-none h-10 md:text-sm"
              />
            </div>
            <div className="ml-16 md:mx-10">
              <button type="submit" 
                 className="bg-color1 ml-2
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8"
              >Sign Up</button>
         
            </div>
            <div className="mt-2 flex flex-row text-center items-center justify-evenly">
              <p className="text-sm  font-normal ">Already a User?  
                <Link
                to="/login"
                className="mb-1 px-4 text-lg font-medium text-color1"
              >
                Login
              </Link>
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
