import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Home';
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function ComplaintEnq() {

  let navigate = useNavigate();
  let [flag, setFlag] = useState(false);  // used for conditional rendering

  let home = () => { navigate("/") }
  let citizenRegister = () => { navigate("/citizen/registration") }
  let showTable = () => { setFlag(true) };

  // ------------------------------------------------------------------------------- fetch data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  let [admin, setAdmin] = useState({
    admin_id: "",
    admin_username: "",
    admin_password: "",
    admin_profile_image: ""
  });

  // let [admin_password, setAdmin_Password] = useState()
  // let [admin_profile_image, setAdmin_Profile_Image] = useState()
  let [oneFile, setOneFile] = useState({ image: undefined });

  // -------------------------------------------------------------- Create Admin
  const insertAdmin = (e) => {

    e.preventDefault();

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      oneFile.image
    );

    console.log(oneFile.image);

    axios.post(`http://localhost:8080/admin/create/${admin.admin_username}/${admin.admin_password}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then((resolve) => {
        alert("Admin added successfully");
        console.log(resolve);
      }).catch((reject) => {
        console.log(reject)
      })


  }

  const setImage = (e) => {
    e.preventDefault();
    let field = e.target.files[0];
    if (field.length === 0) {
      alert(field + ' must not be empty..')
    } else {
      setOneFile({ image: e.target.files[0] });
      console.log(oneFile.image);
    }
  }

  const setValues = (e) => {
    let field = e.target.value;
    console.log(field);
    if (field.length === 0) {
      alert(field + ' must not be empty..')
    } else {
      setAdmin({ ...admin, [e.target.name]: e.target.value });
    }
  }



  // const readFileDataAsBase64 = (e) => {

  //   let file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     console.log(reader.result);
  //     setAdmin_Profile_Image(reader.result);
  //   }

  //   reader.readAsDataURL(file);
  //   console.log(admin_profile_image);
  // }

  // -------------------------------------------------------------- Read Admin

  const getAdmin = (e) => {
    setFlag(true)

    axios.get("http://localhost:8080/admin/read", {})
      .then((resolve) => {
        console.log(resolve.data[0]);

        const byteCharacters = atob(resolve.data[0].admin_profile_image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        let image = new Blob([byteArray], { type: 'image/jpeg' });
        let imageUrl = URL.createObjectURL(image);
        console.log(imageUrl);
        setAdmin({
          admin_id: resolve.data[0].admin_id,
          admin_username: resolve.data[0].admin_username,
          admin_password: resolve.data[0].admin_password,
          admin_profile_image: imageUrl
        });

        alert("Data fetched successfully");
      }).catch((reject) => {
        console.log(reject)
      })
  }

  // -------------------------------------------------------------- Delete Admin

  const deleteAdmin = (e) => {
    axios.delete("http://localhost:8080/admin/delete/2", {})
      .then((resolve) => {
        console.log(resolve.data);
        alert("deleted")
      }).catch((er) => {
        alert("failed");
      })
  }


  // ------------------------------------------------------------------------------- fetch data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  return (
    <div className="main_container">
      <Button onClick={home} startIcon={<SaveIcon />} sx={{ m: '10px' }}
        color='secondary' variant='contained'
      >Home</Button>

      <MDBContainer className=" my-5 App">

        <MDBCard>
          <MDBRow sm='6' className='g-0'>

            {/* <MDBCol md='6'>
              <MDBCardImage src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1662883536~exp=1662884136~hmac=2d591f5673db386848608cda9e4942a967e387bd2217165f98a4fc54d7b5716b' alt="login form" className='rounded-start w-100' />
            </MDBCol> */}

            <MDBCol sm='12'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2 '>
                  <MDBIcon fas icon="cubes fa-3x me-3 " style={{ color: '#ff6219' }} />
                  <span className="h1 fw-bold mb-0 ">Complaint Enquiry</span>
                </div>

                <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Enter your complaint number</h4>

                <MDBInput wrapperClass='mb-4' label='Complaint Number' id='formControlLg' type='text' size="lg" />
                {/* <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" /> */}
                <MDBInput wrapperClass='mb-4' onChange={setValues} label='Username' id='admin_username' name='admin_username' type='text' size="lg" />
                <MDBInput wrapperClass='mb-4' onChange={setValues} label='Password' id='admin_password' name='admin_password' type='password' size="lg" />
                <MDBInput wrapperClass='mb-4' onChange={setImage} label='admin_profile_image' id='admin_profile_image' name='admin_profile_image' type='file' size="lg" />

                <MDBBtn className="mb-4 px-5" onClick={getAdmin} color='primary' size='lg'>Read Admin</MDBBtn>
                <MDBBtn className="mb-4 px-5" onClick={deleteAdmin} color='primary' size='lg'>Delete Admin</MDBBtn>
                <MDBBtn className="mb-4 px-5" onClick={insertAdmin} color='primary' size='lg'>create Admin</MDBBtn>

                {/* ---------------------- Conditional Rendering ----------------------  */}
                {!flag &&
                  <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                    Don't have an account?
                    <Button variant='text' onClick={citizenRegister} sx={{ textTransform: 'none', color: '#393f81' }}>
                      Register here
                    </Button>
                  </p>
                }

                <hr />

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
          <MDBRow>


            {/* -------------------------- Conditional Rendering -------------------------- */}
            {flag &&

              <div>


                <div class="container padding-bottom-3x mb-1">

                  <div class="card mb-3">
                    <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
                      <h1>Complaint Status</h1>
                      <span class="text-uppercase">Tracking Complaint No - </span>
                      <span class="text-medium">001698653lp</span>
                    </div>
                    {/* <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Shipped Via:</span> UPS Ground</div>
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span> Checking Quality</div>
                <div class="w-100 text-center py-1 px-2"><span class="text-medium">Expected Date:</span> APR 27, 2021</div>
              </div> */}
                    <div class="card-body">
                      <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                        {/* <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-cart"></i></div>
                    </div>
                    <h4 class="step-title">Received</h4>
                  </div>
                  <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-config"></i></div>
                    </div>
                    <h4 class="step-title">Pending</h4>
                  </div>

                  <div class="step completed">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-medal"></i></div>
                    </div>
                    <h4 class="step-title">In Progress</h4>
                  </div>

                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-car"></i></div>
                    </div>
                    <h4 class="step-title">Completed</h4>
                  </div>

                  <div class="step">
                    <div class="step-icon-wrap">
                      <div class="step-icon"><i class="pe-7s-home"></i></div>
                    </div>
                    <h4 class="step-title">Rejected</h4>
                  </div> */}

                        <MDBTable align='middle' >
                          <MDBTableHead>
                            <tr>
                              <th scope='col'>Citizen Name</th>
                              <th scope='col'>Date</th>
                              <th scope='col'>Complaint Category</th>
                              <th scope='col'>Description</th>
                              <th scope='col'>Status</th>
                              {/* <th scope='col'>Actions</th> */}
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody className='justify-content-start' >
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                  />
                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Sanket Jadhav</p>
                                    {/* <p className='text-muted mb-0'>sanket.jadhav@gmail.com</p> */}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>01/03/2022</p>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>Bhavan (H.O) Bad Quality of materials given to student</p>
                                <p className='text-muted mb-0'>IT department</p>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>Z. P. Schools provided with low quality materials</p>
                              </td>
                              <td>
                                <MDBBadge color='success' pill>
                                  In_Process
                                </MDBBadge>
                              </td>
                              {/* <td>Senior</td> */}
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src={admin.admin_profile_image}
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                  />
                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{admin.admin_username}</p>
                                    {/* <p className='text-muted mb-0'>sanket.jadhav@gmail.com</p> */}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>01/03/2022</p>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>Bhavan (H.O) Bad Quality of materials given to student</p>
                                <p className='text-muted mb-0'>IT department</p>
                              </td>
                              <td>
                                <p className='fw-normal mb-1'>Z. P. Schools provided with low quality materials</p>
                              </td>
                              <td>
                                <MDBBadge color='success' pill>
                                  In_Process
                                </MDBBadge>
                              </td>
                              {/* <td>Senior</td> */}
                            </tr>

                          </MDBTableBody>
                        </MDBTable>

                      </div>
                    </div>
                  </div>
                  {/* <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">

                  <div class="text-left text-sm-right"><a class="btn btn-outline-primary btn-rounded btn-sm" href="#">View Order Details</a></div>
                </div> */}
                </div>
              </div>
            }
            <div>
              <div className='d-flex flex-row justify-content-start' style={{ padding: '20px' }}>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </div>
          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </div>
  )
}
