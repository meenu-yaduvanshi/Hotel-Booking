import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('Full name', 159,),
    createData('Phone number', 237,),
    createData('Email', 262),
    createData('Place', 305),
    createData('Rooms', 356),
];

function TableComponent() {
    const {state} = useLocation;
    console.log(state)
    // const {firstName, lastName, phoneNumber,email,room,place} = state 
    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
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
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        
        </TableContainer>
        <Typography variant="h4" component="h2">
                        Name: {state.firstName}
                    </Typography>
        </div>
    );
}

export default TableComponent