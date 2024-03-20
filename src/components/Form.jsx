import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Calender from './Calender';
import Button from '@mui/material/Button';
import '../App.css';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hotelList = location.state.hotelList
    const hotelId = location.state.hotelId;
    console.log(hotelList);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        place: '',
        room: ''
    });
    // console.log(formData);
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault()
        const form = e.target
        if (form.checkValidity()) {
            console.log("Valid")
            let updateData = {}
            hotelList.forEach(element => {
                if (element.id === hotelId) {
                    element.availability -= formData.room
                    updateData = { ...element }
                }
            });
            fetch(`http://localhost:3001/hotelDetails/${parseInt(hotelId)}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(updateData)
            })
            navigate('/tableCompo', { state: formData })
        }
    };
    return (
        <>
            <nav className='nav-bar'>
                <h1>Booking.com</h1>
            </nav>
            <h4>Hotel Id: {location.state.hotelId}</h4>
            {/* <h4>Hotel Name: {location.state.hotelName}</h4> */}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '28ch' },
                }}
                onSubmit={handleSubmit}
            >
                <div className='form'>
                    <TextField label="First Name" id="firstName" onChange={handleChange} required />
                    <TextField label="Last Name" id="lastName" onChange={handleChange} required />
                    <TextField label="Email" id="email" type="email" onChange={handleChange} required />
                    <TextField label="Phone Number" id="phoneNumber" type="number" onChange={handleChange} required />
                    <TextField label="Place" id="place" onChange={handleChange} required />
                    <TextField label="Room" id="room" type="number" onChange={handleChange} required />
                    <Calender required />
                    <Button variant="contained" type='submit'>Submit</Button >
                </div>
            </Box>
        </>
    )
}

export default Form