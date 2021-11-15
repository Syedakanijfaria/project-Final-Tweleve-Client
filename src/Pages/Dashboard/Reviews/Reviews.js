import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
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
            <Carousel>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </Carousel>
        </Container>
    );
};
export default Reviews;