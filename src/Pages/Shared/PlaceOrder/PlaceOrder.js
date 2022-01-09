import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Footer from '../../Shared/Footer/Footer.js';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() =>
        fetch(`https://lit-lowlands-03671.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [id])

    const { displayName, email } = user;

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "Pending";
        //console.log("status", data);
        axios.post('https://lit-lowlands-03671.herokuapp.com/userOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booked successfully')
                    reset();
                }
            })
    }
    return (
        <Grid container>
            <Typography variant="h4" sx={{ mt: 3 }}>Proceed to Checkout.......</Typography>
            <Grid container spacing={12} sx={{ m: 5 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    {/* shows single product from all products */}
                    <Card sx={{ maxWidth: 400, height: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={details?.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {details?.pdname}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {details?.des}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Price:$ {details?.price}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {details?.type}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid >
                {/* user gives information for purchasing product */}
                < Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ maxWidth: 400, height: '100%' }}>

                        <CardContent sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>Product Name: <br /><input {...register("pdname", { required: true })} placeholder="Title" /></p><br />

                                <p>User Name: <br /><input type="text" {...register("name")} defaultValue={displayName} /></p><br />

                                <p>Mail: <br /><input type="email" {...register("email")} defaultValue={email} /></p><br />

                                <p>Price: $ <br /><input type="number" {...register("price", { required: true })} /></p><br />

                                <p>Address: <br /><input type="address" {...register("address", { required: true })} placeholder="Address" /></p><br />

                                <p>Mobile Number: <br /><input type="Mobile number" {...register("number", { required: true })} placeholder="Mobile Number" /></p><br />

                                <input type="submit" value="Book Now" />
                            </form>
                        </CardContent>

                    </Card>
                </Grid >
            </Grid>
            <Grid>
                <Footer></Footer>
            </Grid>

        </Grid >

    );
};
//
export default PlaceOrder;