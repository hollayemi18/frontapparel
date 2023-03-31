import React from 'react'
import Accordion from '../componet/Accordion'
import Navbar from '../componet/Navbar'
import Hero from '../componet/Hero'
import Image from '../componet/Image'
import Features from '../componet/Features'
import Testimony from '../componet/Testimony'
import How from '../componet/How'
import Footer from '../componet/Footer'

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Image />
    <Features />
    <How />
    <Testimony />
    <Accordion />
    <Footer/>

    </div>
  )
}

export default Home