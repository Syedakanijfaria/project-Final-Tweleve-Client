import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct.js';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>
        fetch('http://localhost:5000/products')
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
                        key={product.id}
                        product={product}
                    >
                    </AvailableProduct>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableProducts;