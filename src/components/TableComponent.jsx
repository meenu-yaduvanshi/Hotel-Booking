import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css'
function createData(name, details) {
    return { name, details };
}

function TableComponent() {
    const location = useLocation();
    const rows = [
        createData('Full name', location.state.firstName + " " + location.state.lastName),
        createData('Phone number', location.state.phoneNumber),
        createData('Email', location.state.email),
        createData('Place', location.state.place),
        createData('Rooms', location.state.room),
        createData('Date', location.state.checkin + " To " + location.state.checkout)
    ];

    return (
        <div>
            <nav className='nav-bar'>
                <h1>Booking.com</h1>
            </nav>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='thankYou'><h1>Thank you for submition !!</h1></div>
            <Link to={'/'}> <div className='returnHome-div'><button>Return Home</button ></div></Link>
        </div>
    );
}

export default TableComponent