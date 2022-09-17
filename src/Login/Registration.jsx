import React, { useState } from 'react';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './Color.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBSelect,
  MDBInput,
  MDBCheckbox,
  MDBBtnGroup
}
  from 'mdb-react-ui-kit';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Registration() {

  let navigate = useNavigate();
  let home = () => { navigate("/") }
  let citizenLogin = () => { navigate("/citizen/login") }



  // const [firstName, setFirstName] = useState('')
  // const [middleName, setMiddleName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [userName, setUserName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [mobileNumber, setMobileNumber] = useState('')
  // const [aadharCardNumber, setAadharCardNumber] = useState('')
  // const [city, setCity] = useState('')
  // const [state, setState] = useState('')
  // const [pincode, setPincode] = useState('')
  // const [role, setRole] = useState('CITIZEN')
  // const [files, setFiles] = useState();


  const [ok, setOK] = useState(false);

  const [allValues, setAllValues] = useState({
    user_aadhar_number: '', user_address_city: '',
    user_address_state: '', user_contact_number: '',
    user_email: '', user_first_name: '',
    user_last_name: '', user_middle_name: '',
    user_password: '', user_pincode: '',
    user_role: 'CITIZEN', user_username: '',
    user_profile_image: ''
  });


  const setValues = e => {
    let field = e.target.value;
    if (field.length === 0) {
      alert(field + ' must not be empty..')
    } else {
      setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
  }

  const readFileDataAsBase64 = (e) => {

    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      setAllValues({ ...allValues, ['user_profile_image']: reader.result });
    }

    reader.readAsDataURL(file);
    console.log(allValues.user_profile_image);
  }


  const createAccount = () => {
    console.log(allValues);

    axios.post('http://localhost:8080/user/insert', allValues)
      .then((response) => {

        console.log(response.data);

        if (response.data == 'OK') {
          alert('Account created with Username=' + allValues.username);
          navigate('/citizen/login');
        } else {
          alert('Account creation failed')
        }
      }).catch((error) => {
        alert('Account creation failed')
        console.log(error);
      })
  }



  return (
    <div>
      <Button onClick={home} startIcon={<HomeIcon />} sx={{ m: '10px' }}
        color='secondary' variant='contained'
      >Home</Button>
      <MDBContainer fluid className='h-custom'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12' className='m-5'>

            <MDBCard className=' ' style={{ borderRadius: '15px' }}>

              <MDBCardBody className='p-0'>

                <MDBRow>

                  <MDBCol md='6' className='p-5 bg-regcard1'>

                    <h3 className="fw-normal mb-5" style={{ color: 'white' }}>General Infomation</h3>


                    <MDBRow className=''>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} className='' label='First Name' size='lg' id='firstName' name='user_first_name' type='text' />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} label='Middle Name' size='lg' id='middleName' name='user_middle_name' type='text' />
                      </MDBCol>

                    </MDBRow>

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} label='Last Name' size='lg' id='lastName' name='user_last_name' type='text' />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} label='Aadhaar Number' size='lg' id='aadharnumber' name='user_aadhar_number' type='number' />
                      </MDBCol>

                    </MDBRow>
                    {/* <MDBRow wrapperClass='mb-4'>
                  <MDBCol > 
                      <select >
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                      </select>
                   </MDBCol> 


                  </MDBRow> */}

                    <MDBInput wrapperClass='mb-4' onChange={readFileDataAsBase64} label='' accept='image/png, image/jpeg' size='lg' id='profileimage' name='user_profile_image' type='file' />

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} label='Username*' size='lg' id='username' name='user_username' type='text' />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} label='Password*' size='lg' id='password' name='user_password' type='password' />
                      </MDBCol>

                    </MDBRow>


                  </MDBCol>


                  <MDBCol md='6' className='bg-regcard2 p-5'>

                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                    <MDBInput wrapperClass='mb-4' onChange={setValues} labelClass='text-white' label='State' size='lg' id='state' name='user_address_state' type='text' />

                    <MDBRow>

                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} labelClass='text-white' label='Pin Code' size='lg' id='pincode' name='user_pincode' type='number' />
                      </MDBCol>

                      <MDBCol md='7'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} labelClass='text-white' label='City' size='lg' id='city' name='user_address_city' type='text' />
                      </MDBCol>

                    </MDBRow>

                    <MDBRow>

                      <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4' onChange={setValues} labelClass='text-white' label='Phone Number' size='lg' id='contactNumber' name='user_contact_number' type='number' />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' onChange={setValues} labelClass='text-white' label='Your Email' size='lg' id='email' name='user_email' type='email' />
                    <MDBCheckbox name='user_flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />


                    <MDBBtnGroup className='align-items-center' shadow='5' aria-label='register'>
                      <MDBBtn size='md' onClick={createAccount} color='light' outline>Register</MDBBtn>

                    </MDBBtnGroup>

                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Button variant='text' onClick={citizenLogin} sx={{ textTransform: 'none', color: '#393f81' }}>
                      Login here
                    </Button></p>
                  </MDBCol>
                </MDBRow>

              </MDBCardBody>

            </MDBCard>
            <div className='d-flex flex-row justify-content-start' style={{ padding: '20px' }}>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>
          </MDBCol>


        </MDBRow>

      </MDBContainer>

    </div>
  );
}

export default Registration;