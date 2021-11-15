import { Card, Container, Grid, Typography, Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';
//import ManageContent from './ManageContent/ManageContent.js';

const ManageAllOrder = () => {
    //const { _id, pdname, name, price, email, number, address } = props.user || {};
    //const { user } = useAuth();
    const [order, setOrder] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order, isDelete])


    const handlePending = (id) => {
        console.log(id);
        const aproved = window.confirm('Your order has been Shipped!');
        if (aproved) {
            fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('Shipped successfully')
                        setOrder({});
                        console.log(setOrder);
                    }
                })
        }
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `https://lit-lowlands-03671.herokuapp.com/userOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = order.filter(user => user._id !== id);
                        setOrder(remaining);
                        setIsDelete(true);
                    } else { setIsDelete(false); }
                })
        }
    }

    return (
        <Container>
            <Typography sx={{ color: 'info.main', fontWeight: 300, mb: 5 }} variant="h3" gutterBottom component="div">Manage All Order</Typography>
            <Grid container spacing={8} >
                {
                    order.map(user =>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ py: 5 }}>
                                <Typography variant="h5" gutterBottom component="div">Title: {user?.pdname}</Typography >
                                <Typography variant="h5" gutterBottom component="div">User Name: {user?.name}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Email: {user.email}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Mobile Number: {user.number}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Price: {user.price}</Typography >
                                <Typography variant="text" gutterBottom component="div">Address: {user.address}</Typography >
                                <Button sx={{ m: 1 }} variant="contained" onClick={() => handlePending(user?._id)} >Pending</Button>
                                <Button sx={{ m: 1 }} variant="contained" onClick={() => handleDelete(user?._id)} >Delete</Button>
                            </Paper>
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};
export default ManageAllOrder;