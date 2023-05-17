import eas8 from '../img/as14.png'
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const year = new Date()
    const show = year.getFullYear()
  return (
    <MDBFooter className='text-center text-white'>

          <a className='flex flex-row no-underline ml-36'>
                                     <img src={eas8} className="h-16 w-14"/>
                                    <h2 className="mt-4 font-serif font-extrabold p2-6 text-orange-500 md:text-5xl text-4xl">Ease
                                    </h2>       
                                </a>
      <MDBContainer className='pt-4'>
        <section className='mb-4 mr-6'>
          
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>


        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {show} Copyright:
      </div>
    </MDBFooter>
  );
}