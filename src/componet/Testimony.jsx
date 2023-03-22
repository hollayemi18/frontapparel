import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Testimony() {
  return (
    <div className='md:flex flex-row my-6 mx-10' >
      <div className='max-sm:hidden my-5'>
            <MDBCard className='max-sm:hidden'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay max-sm:hidden'>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='font-thin text-center'>S <span className='font-black'>"</span> atisfied with the service provided by the company , wish this was in existed before i did my wedding ,
          the owanbe would have been dope.<span className='font-black'>"</span> 
        </MDBCardTitle>
        <MDBCardText className='font-black'>
          Mrs obadiah
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
         <div className='my-5'>
            <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay max-sm:hidden'>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='font-thin'> <span className='font-black'>"</span> Thanks for the creator of this platform, my fashion sense and style has rapidly increase since using this company for 
          my family wadrobe change.AN app will be better to make a good review.<span className='font-black'>"</span> 
        </MDBCardTitle>
        <MDBCardText className='font-black text-right'>
          Mr peter
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
         <div className='my-5'>
            <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay max-sm:hidden'>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='font-thin' > <span className='font-black'>"</span> The owanbe for my wedding change my perspective about the platform, The wedding dress and that of my husband was 
          done and completed before a week to the wedding.So fast and Reliable.<span className='font-black'>"</span> 
        </MDBCardTitle>
        <MDBCardText className='font-black text-right'>
          Mr/Mrs oviah 
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      </div>
    </div>
  );
}
