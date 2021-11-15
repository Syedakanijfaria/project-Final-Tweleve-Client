import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
//import Carousel from 'react-material-ui-carousel'

const bannerBg = {
    background: `url(${bg})`,
    maxWidth: '100%'
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '600px'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ maxWidth: 'auto', height: '100%' }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Natural & Safe
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 15, fontWeight: 400 }}>
                            The skin of the babies is very delicate as well as sensitive so you should pamper the baby's skin with the best products. Baby products are specially designed  for the tender skin of your babies.
                        </Typography>
                        <Link to="/shop"><Button variant="contained" style={{ textDecoration: 'none' }}>Explore All Products</Button></Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
};
export default Banner;