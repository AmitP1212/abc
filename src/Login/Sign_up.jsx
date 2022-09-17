import React  ,{ useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router"
      import {
        MDBBtn,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBCard,
        MDBCardBody,
        MDBCardImage,
        MDBInput,
        MDBIcon,
        MDBCheckbox
      }
      from 'mdb-react-ui-kit';
      
      function Login(props)
       {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        let navigate = useNavigate()
        const dispatch= useDispatch()

        function check()
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    username:username,
                    password:password})
                };
            fetch('http://localhost:8080/check', requestOptions)
            .then(response => response.json())
            .then(data =>{
                 if(data.result === "OK")
                 {
                    dispatch({type:"save",payload:{uname:username,password:password}})
                    navigate("/home")
                 }
            } );
                    
            
            
            /*if(uname === "prachi" && password === "123")
            {
                console.log("in if",uname,password)
                navigate("/home")
            }*/
        }





        return (
          <MDBContainer fluid>
      
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
      
                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size='lg'/>
                      <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
                    </div>
      
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg'/>
                      <MDBInput 
                      label='Username'
                      name='username' 
                      id='form2' 
                      type='text' 
                      onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>
      
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size='lg'/>
                      <MDBInput 
                      label='Password' 
                      name='password'
                      id='form3' 
                      type='password' 
                      onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
      
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size='lg'/>
                      <MDBInput label='Repeat your password' id='form4' type='password'/>
                    </div>
      
                    <div className='mb-4'>
                      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                    </div>
      
                    <MDBBtn className='mb-4' size='lg' value={"login"} >Register</MDBBtn>
      
                  </MDBCol>
      
                  <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                  </MDBCol>
      
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
      
          </MDBContainer>
        );
      }
      
      export default Login;
  
    
