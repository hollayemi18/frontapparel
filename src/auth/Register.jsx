import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../img/img1.png'

const Register = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const registerUser = async (e) => {
    e.preventDefault()
    const response =  await fetch('http://localhost:8080/register', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <div  >


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
          className="bg-gray-200 drop-shadow-3xl mt-2 mx-6"
        >

          <form onSubmit={registerUser} className="flex flex-col gap-8 px-12 py-6">
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl"
              >
                UserName
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="rounded-full text-xl pl-8 text-black bg-yellow-50 border-none h-10"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="rounded-full text-xl pl-8 text-black bg-slate-300 border-none h-10"
              />
            </div>
            <div className="flex flex-col gap-2 md:mx-16">
              <label
                htmlFor=""
                className="pl-5 text-color1 text-lg font-bold md:text-2xl"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="rounded-full text-xl pl-8 text-color4  border-none h-10"
              />
            </div>
            <div className=" ml-24 md:mx-16">

              <Link
              to="/Confirm"
                type="submit" 
                className="bg-color1 ml-12
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-4"
              >
                Register
              </Link>
            </div>
            <div className="mt-10 flex flex-row text-center items-center justify-evenly">
              <p className="text-sm  font-normal">Already a User? </p>

              <Link
                to="/Login"
                className="mb-2 text-lg font-medium text-color1"
              >
                Login
              </Link>
            </div>
            <h5 className="text-center mt-6">&copy; easetech {year}</h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;