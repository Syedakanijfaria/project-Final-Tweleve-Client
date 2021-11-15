import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.jpg';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { width } from '@mui/system';


const ExtraSection = ({ _id }) => {
    const history = useHistory();
    const handleDetails = (_id) => {
        const uri = `/placeOrder/${_id}`;
        history.push(uri);
    }
    return (
        <Container sx={{ flexGrow: 1, mt: 5, mb: 4 }}>
            <Grid container spacing={2}  >

                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ height: "300px", width: "550px" }} src={doctor} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ mt: 2, p: 5 }}>
                    <Typography variant="h4" style={{ color: '#5CE7ED' }}>
                        TESTED FOR MILDNESS
                    </Typography>
                    <Typography variant="h5" sx={{ my: 2 }}>
                        Your Baby Deserve The Best Care
                    </Typography>
                    <Typography variant="h6" sx={{ my: 2 }} style={{ fontSize: 14, fontWeight: 300 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sequi facere totam aliquam.
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}> Subscribe to Newsletter</Typography>
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
        </Container>
    );
};

export default ExtraSection;