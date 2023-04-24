import React from 'react'
import Navbar from '../componet/Navbar'
import Accordion from '../componet/Accordion'
import Features from '../componet/Features'
import Footer from '../componet/Footer'
import Hero from '../componet/Hero'
import How from '../componet/How'
import Image from '../componet/Image'
import Testimony from '../componet/Testimony'
function Home() {
  return (
    <div>
    <Navbar/> 
    <Hero/>
    <Image/>
    <Features/>
    <How/>
    <Testimony/>
    <Accordion/>
    <Footer/>
    </div>
  )
}

export default Home