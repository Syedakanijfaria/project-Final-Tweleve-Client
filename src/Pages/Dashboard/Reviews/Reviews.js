import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
//import AvailableProduct from '../AvailableProduct/AvailableProduct.js';
//import Reviewer from './Reviewer/Reviewer.js';
import Review from './Review/Review.js';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>
        fetch('https://lit-lowlands-03671.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
        , [])
    //console.log(products);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>ALL PRODUCTS</Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </Grid>
        </Container>
    );
};
export default Reviews;