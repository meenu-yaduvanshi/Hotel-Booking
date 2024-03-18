import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Calender from './Calender';
import Button from '@mui/material/Button';
import '../App.css';
import { useState } from "react"
import { Link } from "react-router-dom";

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        room: '',
        place: ''
    });
    console.log(formData) 
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = () => {
        console.log(formData);
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('email').value = '';
        document.getElementById('room').value = '';
        document.getElementById('place').value = '';
    };


    return (
        <>        <nav className='nav-bar'>
            <h1>Booking.com</h1>
        </nav>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '28ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='form'>
                    <TextField label="First Name" id="firstName" onChange={handleChange} />
                    <TextField label="Last Name" id="lastName" onChange={handleChange} />
                    <TextField label="Email" id="email" type="email" onChange={handleChange} />
                    <TextField label="Phone Number" id="phoneNumber" type="number" onChange={handleChange} />
                    <TextField label="Place" id="place" onChange={handleChange} />
                    <TextField label="Rooms" id="room" type="number" onChange={handleChange} />
                    <Calender />    
                    <Link to={{pathname:'/tableCompo', state:formData}}> <Button variant="contained" onClick={handleSubmit}>Submit</Button ></Link>
                   
                </div>
            </Box>
        </>
    )
}

export default Form