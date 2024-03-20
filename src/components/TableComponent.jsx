import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Link} from "react-router-dom";

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
    ];

    return (
        <div>
            <nav className='nav-bar'>   
                <h1>Booking.com</h1>
            <Link to={'/'}> <button className='home-btn'>Home</button ></Link>
            </nav>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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

        </div>
    );
}

export default TableComponent