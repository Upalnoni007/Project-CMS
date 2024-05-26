import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
      <MDBContainer className='p-4'>
        <section>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://images.shiksha.com/mediadata/images/1543408184php0sM4Ri.png' alt='img' className='w-100'  height='125px' />
                
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://getmyuni.azureedge.net/college-image/big/mckv-institute-of-engineering-mckvie-howrah.jpg' alt='img' className='w-100' height='125px' />
                
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://images.shiksha.com/mediadata/images/1543408066phpYI1L8j.png' alt='img' height='125px' className='w-100' />
                
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                

              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://images.shiksha.com/mediadata/images/1616756078phpStYCHk.jpeg' alt='img' className='w-100' height='125px' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.mckvie.edu.in/wp-content/uploads/2021/06/img_7601_400x0.500x0.jpg' alt='img' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://media.collegedekho.com/media/img/institute/crawled_images/None/library.537x0-is.jpg' alt='img' className='w-100' height='130px' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>

          </MDBRow>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: All Copyright Reserved to USBN

      </div>
    </MDBFooter>
  );
}