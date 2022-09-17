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


function AdminLogin() {

  let navigate = useNavigate();
  let home = () => { navigate("/") }

  return (
    <body className='App-center '>
      <Button onClick={home} startIcon={<HomeIcon />} sx={{ m: '10px' }}
        color='secondary' variant='contained'
      >Home</Button>
      <MDBContainer className=" my-5 ">

        <MDBCard>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1662883536~exp=1662884136~hmac=2d591f5673db386848608cda9e4942a967e387bd2217165f98a4fc54d7b5716b' alt="login form" className='rounded-start w-100' />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="h1 fw-bold mb-0">Admin Login</span>
                </div>

                <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h4>

                <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' size="lg" />
                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" />

                <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Login</MDBBtn>
                <p><a className="small text-muted" href="#!">Forgot password?</a></p>
                {/* <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p> */}

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

export default AdminLogin;