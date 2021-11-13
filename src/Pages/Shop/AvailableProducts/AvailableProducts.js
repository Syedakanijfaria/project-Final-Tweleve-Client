import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct.js';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>
        fetch('https://lit-lowlands-03671.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [])
    console.log(products);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>ALL PRODUCTS</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <AvailableProduct
                        key={product._id}
                        product={product}
                    >
                    </AvailableProduct>)
                }
            </Grid>
        </Container>
    );
};
export default AvailableProducts;