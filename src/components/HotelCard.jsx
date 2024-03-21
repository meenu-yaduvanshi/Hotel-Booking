import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Rating, { ratingClasses } from '@mui/material/Rating';
import '../App.css';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Alert';

const HotelCard = ({ item, hotelList, hotelId, hotelName }) => {
    const newObj = {
        hotelId: hotelId,
        hotelList: hotelList,
        hotelName: hotelName
    }

    return (
        <div className='hotelCard-container'>
            <Card className='mainContainer'
                variant="outlined"
            >
                <div>
                    <CardMedia
                        component="img"
                        width="100"
                        height="180"
                        src={item.image}
                        sx={{
                            borderRadius: '6px',
                            width: { xs: '150%', sm: 350 },
                        }}
                    />
                </div>
                <div id='centerContainer'>
                    <Typography variant="h4" component="h2">
                        {item.hotelName}
                    </Typography>
                    <Rating name="half-rating" defaultValue={item.rating} />

                    <Typography variant="h5" color="text.secondary" fontWeight="regular">
                        {item.address}
                    </Typography>
                </div>
                <div className='endContainer'>
                    <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        {item.price}
                    </Typography>
                    <div className='button'>
                        {item.availability !== 0 ? (
                            <>
                                <Typography variant="body2" color="text.secondary" fontWeight="regular">
                                    availability :- {item.availability}
                                </Typography>
                                <Link to={"/form"} state={newObj}>
                                    <Button variant="contained">Book</Button>
                                </Link></>) : (<>
                                    <Stack sx={{ width: '100%' }} spacing={2}>
                                        <Alert severity="error">Room not avaible </Alert>
                                    </Stack>
                                    <Button variant="contained" disabled>
                                        Disabled
                                    </Button>
                                </>
                        )}
                    </div>
                </div>

            </Card>
        </div >
    )
}

export default HotelCard