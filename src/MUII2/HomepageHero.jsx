import React from 'react'

import '../App.css'
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom';


export default function HomepageHero() {

    let navigate = useNavigate();
    let mainDashboard = () => { navigate("/") }

    return (
        <div>

            <div  >
                <div className='App col-lg-12'>
                   
                    <h2><Button id='dash-btn' onClick={mainDashboard} startIcon={<HomeIcon />} sx={{ m: '10px', pr: '80px' }}
                        color='success'  variant='contained' 
                    >Dashboard</Button></h2>
                </div>
            </div>

        </div>
    )
}
