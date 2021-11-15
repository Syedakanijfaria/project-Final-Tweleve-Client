import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.jpg'
import { Button, Typography } from '@mui/material';

// const appointmentBanner = {
//     background: `url(${doctor})`,
//     backgroundColor: 'rgba(45, 58, 74, 0.9)',
//     backgroundBlendMode: 'darken, luminosity',
//     marginTop: 175
// }

const ExtraSection = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 4 }}>
            <Grid container spacing={2} sx={{ height: "500px" }}>
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Grid >
                        <img sx={{ height: "500px" }} src={doctor} />
                    </Grid>
                    <Grid>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExtraSection;