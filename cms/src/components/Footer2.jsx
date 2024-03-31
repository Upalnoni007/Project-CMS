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
                <img src='https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/273011698_453099849814482_2205560438973126697_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=7E0sR1Je2MIAX-tMs7g&_nc_ht=scontent.fccu18-1.fna&oh=00_AfCmWWbb3zObiFSHsHTPFbo-sMDkAvJ-zYcgooOesoKZqw&oe=643BE4E5' className='w-100' />
                <a href=''>
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
                <img src='https://getmyuni.azureedge.net/college-image/big/mckv-institute-of-engineering-mckvie-howrah.jpg' className='w-100' height='125px' />
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
                <img src='https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/336880837_175812608172547_5147668041969026401_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Wc5IDBwAzfsAX9lcts4&_nc_ht=scontent.fccu18-1.fna&oh=00_AfBPEYMSxk71JVWR7bKowZSV8lc8bPscDMUMBdIbKH_i5g&oe=643BB753' className='w-100' />
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
                <img src='https://images.shiksha.com/mediadata/images/1616756078phpStYCHk.jpeg' className='w-100' height='125px' />
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
                <img src='https://www.mckvie.edu.in/wp-content/uploads/2021/06/img_7601_400x0.500x0.jpg' className='w-100' />
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
                <img src='https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/278016788_493134925810974_6419414322591213696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_ohc=g0kYgbuACKgAX-xSowY&_nc_ht=scontent.fccu18-1.fna&oh=00_AfBpVSANkgsDOTWJCMYvr8k2W042911fBOfAQLbhM-Mlxg&oe=643C9921' className='w-100' height='130px' />
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