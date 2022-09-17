import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';
import { padding } from '@mui/system';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
            <div className='text-center p-2'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop:'10px', fontSize:'1.2em', fontWeight:'bold', padding:'' }}>
                Image Galery
                {/* <a className='text-white' href='#'>
                    MDBootstrap.com
                </a> */}
            </div>
            <MDBContainer className='p-4'>
                <section className=''>
                    <MDBRow>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
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
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
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
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
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
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
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
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
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
                                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
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


        </MDBFooter>
    );
}