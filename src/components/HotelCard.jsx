import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Rating, { ratingClasses } from '@mui/material/Rating';
import '../App.css';
import { Link } from "react-router-dom";

const HotelCard = ({ items }) => {
    return (
        <div>
            <Card
                variant="outlined"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <CardMedia
                    component="img"
                    width="100"
                    height="180"
                    src={items.image}
                    sx={{
                        borderRadius: '6px',
                        width: { xs: '100%', sm: 350 },
                    }}
                />
                <Box sx={{ alignSelf: 'center', ml: 4 }}>
                    <Typography variant="h4" component="h2">
                        {items.hotelName}
                    </Typography>
                    <Rating name="half-rating" defaultValue={items.rating} />
                    <Typography variant="h5" color="text.secondary" fontWeight="regular">
                        {items.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        {items.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        availability:- {items.availability}
                    </Typography>
                    <div className='button'>
                        <Link to={`/form`}> <Button variant="contained">Booking</Button></Link>
                    </div>
                </Box>
            </Card>
        </div>
    )
}

export default HotelCard