import React from 'react'
import Accordion from '../componet/Accordion'
import Navbar from '../componet/Navbar'
import Hero from '../componet/Hero'
import Image from '../componet/Image'
import Features from '../componet/Features'
function home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Image />
    <Features />
    <Accordion />

    </>
  )
}

export default home