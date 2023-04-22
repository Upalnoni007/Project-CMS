import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='box' style={{justifyContent:'center'}}>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 ml-4' >
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/mckvieoriginal/' target='_blank' role='button'>
           
           <a target="_blank"> 
           <MDBIcon fab icon='facebook-f' /></a>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com/mckvieofficial?igshid=YmMyMTA2M2Y='target='_blank' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/mckvie/'target='_blank' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/@mckvinstituteofengineering2684/featured'target='_blank' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>
  
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: All Copyright Reserved to USBN
      </div>
    </MDBFooter>
    </div>
  );
}

