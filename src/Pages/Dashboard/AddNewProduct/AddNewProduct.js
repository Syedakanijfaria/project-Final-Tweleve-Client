import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth.js';
import { Container, Typography } from '@mui/material';

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography> Image: <input {...register("img", { required: true })} placeholder="img-url" /></Typography><br />
                <Typography>Tour Tilte: <input {...register("pdname", { required: true })} placeholder="Title" /></Typography><br />
                <Typography>User Name: <input type="text" {...register("name")} defaultValue={displayName}
                /></Typography><br />
                <Typography>Mail:<input type="email" {...register("email")} defaultValue={email} /></Typography><br />
                <Typography>Description:<input type="text" {...register("des", { required: true })} ></input></Typography><br />
                <Typography> Price: $<input type="number" {...register("price")} /></Typography><br />
                <input type="submit" value="Add new Product" />
            </form>
        </Container>
    );
};
export default AddNewProduct;