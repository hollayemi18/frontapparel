import React, { useState } from 'react'
import Bottom from './componet/Bottom'
import Footer from '../componet/Footer'
//import newRequest from '../utilies/newRequest'
import { useNavigate } from 'react-router-dom'
import Whole from './componet/whole'
import axios from 'axios'
function Dashboard() {
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  const logout  = async(e)=>{
    try {
    const out  =await axios.get('https://easeback.onrender.com/logout')
    if (out){
      navigate('/login')
      console.log("successful logout!")
    }
    } catch (error) {
      return console.log("not successful")
    }
  }
  const auth =async ()=>{
    try {
    const res = await axios.post("https://easeback.onrender.com/login", {
    email,
    password
  },{withCredentials: true})
  if(res){
    navigate('/dashboard')
  }
    } catch (error) {
      
    }
  }
  return (
   <div>
    <Whole />
     {auth ? 
    
     (<div>
       <h5>welcome </h5>
           <button onClick={logout} className="bg-black ml-4
        hover:bg-white hover:text-color1  text-white rounded-lg py-2 px-8">  
                Logout 
              </ button>
     </div>)
      : (<div>
        not allowed 
      </div>)}
      <Footer/>
    <Bottom />

   </div>
  )

      }
export default Dashboard