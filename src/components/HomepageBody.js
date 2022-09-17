import { Box, Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CssBaseline, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import OfficialIcon from '@mui/icons-material/SupervisorAccount';
import WorkerIcon from '@mui/icons-material/GroupsOutlined';
import CitiLogIcon from '@mui/icons-material/VerifiedUserOutlined';
import CitiRegiIcon from '@mui/icons-material/PersonAddAltOutlined';
import StatusIcon from '@mui/icons-material/AutoModeOutlined';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../MUII2/MUI.css'
import '../Content/bootstrapLux.min.css'
import '../App.css';
import './Homepage.css';




export default function HomepageBody() {


    let navigate = useNavigate();
    let [bool, setBool] = useState(false);


    let adminLogin = () => { navigate("/admin/login") }
    let officialLogin = () => { navigate("/official/login") }
    let workerLogin = () => { navigate("/worker/login") }
    let citizenRegistration = () => { navigate("/citizen/registration") }
    let citizenLogin = () => { navigate("/citizen/login") }
    let complaintEnquiry = () => { navigate("/complaintenquiry") }
    let mainDashboard = () => { navigate("/") }

    function complaintStatus() {
        setBool(true);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch('http://localhost:8080/admin/getadmin')
            .then((res) => res.json())
            .then((json) => {
                console.log("-----------------------" + json[0].admin_profile_image);
                console.log(json)
            });
    }

    return (
        <div>
            <section id="hero" flex={2}  >
                <div>
                    <Stack direction="row" spacing={2} justifyContent='space-between' flex={1} >
                        <Stack direction="column" spacing={2} justifyContent='' flex={1}>
                            <Box id='actor' bgcolor='' className='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" } }} >
                                <div >
                                    <i ></i>
                                    {/* <h3><a href={{onclick:{adminLogin}}}>Admin Login</a></h3> */}
                                    <Button id='hmbtn' onClick={adminLogin} startIcon={<HomeIcon />} sx={{ m: '10px', pr: '80px' }}
                                        color='secondary' variant='contained'
                                    >Admin Login</Button>
                                </div>
                            </Box>
                            <Box id='actor' className='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" } }} >
                                <div className='hover-zoom'>
                                    <i ></i>
                                    <h3> <Button id='hmbtn' onClick={officialLogin} startIcon={<OfficialIcon  />} sx={{ m: '10px', pr: '60px' }}
                                        color='secondary' variant='contained'
                                    >Official Login</Button></h3>
                                </div>
                            </Box>
                            <Box id='actor' className='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" } }} >
                                <div >
                                    <i ></i>
                                    <h3> <Button id='hmbtn' onClick={workerLogin} startIcon={<WorkerIcon />} sx={{ m: '10px', pr: '60px' }}
                                        color='secondary' variant='contained'
                                    >Worker Login</Button></h3>
                                </div>
                            </Box>
                        </Stack>


                        <Stack direction="column" spacing={2} justifyContent='' flex={1} sx={{ display: { xs: "", sm: "block" }, bgcolor: '' }}>
                            <div className='App col-lg-12 bg-image hover-zoom'>
                                <h2>
                                    <Button id='dash-btn' onClick={mainDashboard} startIcon={<HomeIcon />} sx={{ m: '10px', pr: '80px' }}
                                        color='success' variant='contained'
                                    >Dashboard</Button>
                                </h2>
                            </div>
                        </Stack>

                        <Stack direction="column" spacing={2} justifyContent='center' flex={1}>
                            <Box id='actor' bgcolor='' className='' justifyContent='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" } }} >
                                <div id='ri8div' style={{ justifyContent: 'right', display: 'flex' }}>
                                    <i ></i>
                                    <h3> <Button id='rightbtn' onClick={citizenRegistration} startIcon={<CitiRegiIcon />} sx={{ m: '10px', px: '15px' }}
                                        color='secondary' variant='contained'
                                    >Citizen Registration</Button></h3>
                                </div>
                            </Box>
                            <Box id='actor' bgcolor='linear-gradient(to right, #33ccff 0%, #ff99cc 100%)' className='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" }, backgroundColor: '' }} >
                                <div id='ri8div' style={{ justifyContent: 'right', display: 'flex' }}>
                                    <i ></i>
                                    <h3> <Button id='rightbtn' onClick={citizenLogin} startIcon={<CitiLogIcon />} sx={{ m: '10px', pr: '80px' }}
                                        color='secondary' variant='contained'
                                    >Citizen Login</Button></h3>
                                </div>
                            </Box>
                            <Box id='actor' className='' flex={1} p={2} sx={{ display: { xs: "", sm: "block" } }} >
                                <div id='ri8div' style={{ justifyContent: 'right', display: 'flex' }}>
                                    <i ></i>
                                    <h3> <Button id='rightbtn' onClick={complaintEnquiry} startIcon={<StatusIcon />} sx={{ m: '10px', pr: '45px' }}
                                        color='secondary' variant='contained'
                                    >Complaint Status</Button></h3>

                                </div>
                            </Box>
                        </Stack>

                    </Stack>

                </div>
            </section >
        </div >
    )
}
