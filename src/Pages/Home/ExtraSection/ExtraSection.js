import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.jpg';
import { Button, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router';


const ExtraSection = ({ _id }) => {
    const history = useHistory();
    const handleDetails = (_id) => {
        const uri = `/placeOrder/${_id}`;
        history.push(uri);
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 4 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Grid >
                        <img sx={{ height: "600px" }} src={doctor} />
                    </Grid>
                    <Grid sx={{ p: 5 }}>
                        <Typography variant="h4" style={{ color: '#5CE7ED' }}>
                            TESTED FOR MILDNESS
                        </Typography>
                        <Typography variant="h5" sx={{ my: 2 }}>
                            Your Baby Deserve The Best Care
                        </Typography>
                        <Typography variant="h6" sx={{ my: 2 }} style={{ fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit sequi facere totam aliquam.
                        </Typography>
                        <Typography variant="h5">
                            Subscribe to Newsletter
                            <form>
                                <TextField
                                    sx={{ width: '50%' }}
                                    label="Email"
                                    type="email"
                                    variant="standard" />

                                <Button onClick={() => handleDetails(_id)} variant="contained">Sign Up</Button>
                            </form>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default ExtraSection;