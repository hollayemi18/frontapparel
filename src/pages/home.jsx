import React from 'react'
import Accordion from '../componet/Accordion'
import Navbar from '../componet/Navbar'
import Hero from '../componet/Hero'
import Slide from '../componet/Slide'


function home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Slide />
    <Accordion />
    </>
  )
}

export default home