import Carousel from 'react-bootstrap/Carousel';
import eas4 from '../img/images1.jpg'
import eas2 from '../img/ease.jpg'
import eas3 from '../img/ease4.jpg'
import eas10 from '../img/eas10.jpg'
import eas5 from '../img/ease6.jpg'
import ease5 from '../img/eas3.jpg'
import ease1 from '../img/ease1.jpg'



function Image() {
  return (
 <div className='container flex flex-col md:flex-row items-center px-10 mx-auto  space-y-0 md:space-y-0'>
     <Carousel className='container flex flex-col-reverse md:flex-row items-center px-10 mx-auto  space-y-0 md:space-y-0'>
      <Carousel.Item className= ""  >
         <Carousel.Caption  className= 'w-48 ml-12 bg-black text-white items-center justify-center'>
          <h3>Owanbe's</h3>
        </Carousel.Caption>
        <img
          className=""
          src={eas2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" "
           src={eas3}
          alt="Second slide"
        />

        <Carousel.Caption className= 'w-48 ml-12 bg-black text-white items-center justify-center'>
          <h3>African Attire </h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={eas10}
          alt="Third slide"
        />

        <Carousel.Caption className= 'w-48 ml-12 bg-black text-white items-center justify-center'>
          <h3>Fast And Reliable Delivery</h3>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img
          className=" "
           src={ease5}
          alt="Second slide"
        />

        <Carousel.Caption className= 'w-48 ml-12 bg-black text-white items-center justify-center'>
          <h3>African Root </h3>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img
          className=" "
           src={eas5}
          alt="Second slide"
        />

        <Carousel.Caption className= 'w-48 ml-36 bg-black text-white items-center justify-center'>
          <h3>Kid's Attire </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <img src={ease1} className = "max-sm:hidden " alt="" srcset="" />
    </div>
 </div>
  );
}

export default Image;