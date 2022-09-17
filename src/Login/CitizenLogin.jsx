import React from 'react';
import './Color.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom';

function CitizenLogin() {

  let navigate = useNavigate();
  let home = () => { navigate("/") }
  let citizenRegister = () => { navigate("/citizen/registration") }

  return (
    <body className='App-center'>
       <Button onClick={home} startIcon={<HomeIcon />} sx={{ m: '10px' }}
        color='secondary' variant='contained'
      >Home</Button>
    <MDBContainer className=" my-5 ">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://www.liveagent.com/app/uploads/2020/08/img-login.svg?v=2021-06-25' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Citizen Login</span>
              </div>

              <h4 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}  }>Sign into your account</h4>

                <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Button variant='text' onClick={citizenRegister}  sx={{textTransform:'none', color:'#393f81'}}>
        Register here
      </Button></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </body>
  );
}

export default CitizenLogin;