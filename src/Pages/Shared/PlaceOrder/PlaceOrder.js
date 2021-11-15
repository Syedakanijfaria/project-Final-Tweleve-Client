import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
        <Container>
            <Grid container spacing={8} sx={{ m: 3 }}>
                <Grid item xs={12} sm={5}>
                    {/* shows single product from all products */}
                    <Card sx={{ maxWidth: 400 }}>
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
                < Grid item xs={12} sm={7}>
                    <Card sx={{ maxWidth: 400, p: 8 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Product Name: <input {...register("pdname", { required: true })} placeholder="Title" /></p><br />

                            <p>User Name: <input type="text" {...register("name")} defaultValue={displayName}
                            /></p><br />

                            <p>Mail: <input type="email" {...register("email")} defaultValue={email} /></p><br />

                            <p>Price: $<input type="number" {...register("price", { required: true })} /></p><br />

                            <p>Address: <input type="address" {...register("address", { required: true })} placeholder="Address" /></p><br />

                            <p>Mobile Number: <input type="Mobile number" {...register("number", { required: true })} placeholder="Mobile Number" /></p><br />

                            <input type="submit" value="Book Now" />
                        </form>
                    </Card>
                </Grid >
            </Grid>
        </Container >
    );
};

export default PlaceOrder;