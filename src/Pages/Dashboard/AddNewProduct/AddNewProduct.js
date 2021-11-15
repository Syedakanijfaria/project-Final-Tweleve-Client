import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth.js';
import { Card, Container, Typography } from '@mui/material';

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { displayName, email } = user;

    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-lowlands-03671.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
    }

    return (
        <Container>
            <Card variant="outlined" sx={{ minWidth: 200, maxWidth: 800 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{ p: 2 }}> Image: <input {...register("img", { required: true })} placeholder="img-url" /></Typography><br />
                    <Typography sx={{ p: 2 }}>Tour Tilte: <input {...register("pdname", { required: true })} placeholder="Title" /></Typography><br />
                    <Typography sx={{ p: 2 }}>User Name: <input type="text" {...register("name")} defaultValue={displayName}
                    /></Typography><br />
                    <Typography sx={{ p: 2 }}>Mail:<input type="email" {...register("email")} defaultValue={email} /></Typography><br />
                    <Typography sx={{ p: 2 }}>Description:<input type="text" {...register("des", { required: true })} ></input></Typography><br />
                    <Typography sx={{ p: 2 }}> Price: $<input type="number" {...register("price")} /></Typography><br />
                    <input style={{ p: 2 }} type="submit" value="Add new Product" />
                </form>
            </Card>
        </Container>
    );
};
export default AddNewProduct;