import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Container from '@mui/material/Container';


const Footer = () => {
    return (
        <Container sx={{ backgroundColor: 'primary.main', mt: 4 }}>
            <Grid sx={{ p: 2 }}>
                <Grid container spacing={2} sx={{ m: 5 }}>
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom component="div">MILD Baby Care</Typography>
                        <Box>
                            <Typography gutterBottom variant="subtitle2" component="div">Extreme Traveler is equipped with everythig required for an amazing tour. Set up a tour and our service now.</Typography>
                            <br />
                            <Typography variant="h5" gutterBottom component="div" >Follow Us </Typography>
                            <i className="fab fa-facebook-square pe-2"></i>
                            <i className="fab fa-instagram pe-2"></i>
                            <i className="fab fa-linkedin pe-2"></i>
                            <i className="fab fa-twitter-square pe-2"></i>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        {/* important contact information */}
                        <Box>

                            <Typography variant="h4" gutterBottom component="div" >Contact Us </Typography>
                            <Typography variant="button" display="block" gutterBottom> <i className="fas fa-paper-plane"></i> mildbabycare@email.com</Typography>
                            <Typography variant="button" display="block" gutterBottom> <i className="fas fa-reply"></i>mildbabycare@info.com</Typography>
                            <Typography variant="button" display="block" gutterBottom> <i className="fas fa-tty"></i> +299 97 39 82 , 01737625446</Typography>
                            <Typography variant="button" display="block" gutterBottom><i className="fas fa-map-marker-alt"></i> 76 Banani, Dhaka, Bangladesh</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Grid sx={{ my: 3 }}>
                    {/* social links */}
                    <Box>
                        <Typography variant="button" display="block" gutterBottom><small>©2021 Extreme Traveller. All rights reserved</small></Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};



export default Footer;