import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    const { user, logout } = useAuth();
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Link to="/shop"><Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Explore All Products</Button></Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Banner;