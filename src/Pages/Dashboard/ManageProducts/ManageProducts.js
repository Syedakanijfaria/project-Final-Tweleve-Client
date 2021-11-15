import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from "@mui/material";
import { CardActionArea } from '@mui/material';

const ManageProducts = (product) => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() =>
        fetch('https://lit-lowlands-03671.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [isDelete])
    //console.log(products);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `https://lit-lowlands-03671.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        setIsDelete(true);
                    } else { setIsDelete(false); }

                })
        }
    }
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 5 }}>MANAGE ALL PRODUCTS</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product =>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                                        image={product.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                            {product.pdname}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom component="div">
                                            {product.type}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom component="div">
                                            {product.des}
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            {product.price}
                                        </Typography>
                                        <Button onClick={() => handleDelete(product._id)} variant="contained">Delete</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};
export default ManageProducts;