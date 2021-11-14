import { Card, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const ManageContent = (props) => {
    const { _id, pdname, name, price, email, number, address } = props.user || {};
    const [users, setUsers] = useState([]);


    const handlePending = id => {
        const aproved = window.confirm('Your order has been aproved!');
        if (aproved) {
            const url = `http://localhost:5000/userOrder${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedcount) {
                        alert('Shipped successfully')
                        setUsers({});
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
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (

        <Card>
            <Typography className="card-title">Title: {pdname}</Typography >
            <Typography className="card-text">User Name: {name}</Typography >
            <Typography >Price: {price}</Typography >
            <Typography >Email: {email}</Typography >
            <Typography >Mobile Number: {number}</Typography >
            <Typography >Address: {address}</Typography >
            <Button variant="contained" onClick={() => handlePending(_id)} >Pending</Button>
            <Button variant="contained" onClick={() => handleDelete(_id)} >Delete</Button>
        </Card>

    );
};
export default ManageContent;