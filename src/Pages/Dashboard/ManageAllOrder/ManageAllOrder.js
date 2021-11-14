import { Card, Container, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';
//import ManageContent from './ManageContent/ManageContent.js';

const ManageAllOrder = (props) => {
    //const { _id, pdname, name, price, email, number, address } = props.user || {};
    //const { user } = useAuth();
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    const handlePending = id => {
        const aproved = window.confirm('Your order has been aproved!');
        if (aproved) {
            const url = `http://localhost:5000/userOrder/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedcount) {
                        alert('Shipped successfully')
                        setOrder({});
                    }
                })
        }
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `http://localhost:5000/userOrder/${id}`;
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
                    }
                })
        }
    }

    return (
        <Container>
            <h1>this is all user order review</h1>
            <Grid>
                {
                    order.map(user =>
                        <Card>
                            <Typography className="card-title">Title: {user?.pdname}</Typography >
                            <Typography className="card-text">User Name: {user?.name}</Typography >
                            <Typography >Price: {user?.price}</Typography >
                            <Typography >Email: {user?.email}</Typography >
                            <Typography >Mobile Number: {user?.number}</Typography >
                            <Typography >Address: {user?.address}</Typography >
                            <Button sx={{ m: 1 }} variant="contained" onClick={() => handlePending(user?._id)} >Pending</Button>
                            <Button sx={{ m: 1 }} variant="contained" onClick={() => handleDelete(user?._id)} >Delete</Button>
                        </Card>)
                }
            </Grid>
        </Container>
    );
};
export default ManageAllOrder;