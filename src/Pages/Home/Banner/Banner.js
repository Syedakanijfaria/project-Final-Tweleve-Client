import * as React from 'react';
import Grid from '@mui/material/Grid';
import bg2 from '../../../images/bg2.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
//import Carousel from 'react-material-ui-carousel'
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
        backgroundColor: pink[300],
    },
}));
const bannerBg = {
    background: `url(${bg2})`,
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
            <Grid container spacing={12}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} sm={12} md={6}>
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} sm={12} md={6}>
                    <Box sx={{ p: 12 }}>
                        <Typography variant="h3">
                            Natural & Safe
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 15, fontWeight: 400 }}>
                            The skin of the babies is very delicate as well as sensitive so you should pamper the baby's skin with the best products. Baby products are specially designed  for the tender skin of your babies.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/shop"><ColorButton variant="contained" style={{}}>Explore All Products</ColorButton></Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
};
export default Banner;