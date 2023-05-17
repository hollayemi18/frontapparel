import React from 'react'
import Bottom from './componet/Bottom'
import Navbar from './componet/Navbar'
import Footer from '../componet/Footer'
import newRequest from '../utilies/newRequest'
import { useNavigate } from 'react-router-dom'
import Whole from './componet/whole'
function Dashboard() {
const navigate = useNavigate()

  const logout  = async(e)=>{
    try {
    const out  =await newRequest.get('/logout')
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
    const res = await newRequest.post("/login", {
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