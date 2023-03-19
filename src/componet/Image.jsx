import Carousel from 'react-bootstrap/Carousel';
import eas4 from '../img/eas4.jpg'
import eas2 from '../img/eas2.jpg'
import eas3 from '../img/eas3.jpg'
import eas10 from '../img/eas10.jpg'


function UncontrolledExample() {
  return (
    <Carousel className=''>
      <Carousel.Item className= ""  >
         <Carousel.Caption  className= 'w-48 bg-black text-white items-center justify-center'>
          <h3>Fast And Reliable Delivery</h3>
        </Carousel.Caption>
        <img
          className=""
          src={eas10}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={eas2}
          alt="Second slide"
        />

        <Carousel.Caption className= 'w-48 bg-black text-white items-center justify-center'>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={eas8}
          alt="Third slide"
        />

        <Carousel.Caption className= 'w-48 bg-black text-white items-center justify-center'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;