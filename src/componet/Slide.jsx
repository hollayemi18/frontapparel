import React from "react";
import Carousel from "./Carousel";

import image1 from '../img/img2.png'
import image2 from '../img/eas3.jpg'
import image3 from '../img/eas4.jpg'
import image4 from '../img/eas10.jpg'

const slides = [
  image1,image2,image3,image4
]

export default function Slide() {
  return (
    <div>
      <main className="App">
        <div className="max-w-lg">
          <Carousel autoSlide= {true} autoSlideInterval={3000}>
            {slides.map((s)=>(
              <img src={s} />
            )

            )}
          </Carousel>
        </div>
      </main>
    </div>
  )
}
