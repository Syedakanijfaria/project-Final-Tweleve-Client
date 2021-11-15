import { Container, Grid, Paper, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    //console.log("myOrder", myOrder);
    useEffect(() =>
        fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
        , [isDelete])

    const handleDelete = id => {
        //const proceed = window.confirm('Are you sure, you want to delete it?');
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
                        //window.location.reload();
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);
                        setIsDelete(true);
                    } else { setIsDelete(false); }
                })
        }
    }
    return (
        <Container>
            <Typography sx={{ color: 'info.main', fontWeight: 300, mb: 5 }} variant="h3" gutterBottom component="div">My Order</Typography>
            <Grid container spacing={8} >
                {
                    myOrder.map(user =>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ py: 5 }}>
                                <Typography variant="h5" gutterBottom component="div">Title: {user?.pdname}</Typography >
                                <Typography variant="h5" gutterBottom component="div">User Name: {user?.name}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Email: {user.email}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Mobile Number: {user.number}</Typography >
                                <Typography variant="h6" gutterBottom component="div">Price: {user.price}</Typography >
                                <Typography variant="text" gutterBottom component="div">Address: {user.address}</Typography >
                                <Button variant='contained' onClick={() => handleDelete(user._id)} >Delete</Button>
                            </Paper>
                        </Grid>)
                }
            </Grid>
        </Container>
    )
}
export default MyOrder;