import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useHistory } from 'react-router';
//import BookingModal from '../BookingModal/BookingModal';

const AvailableProduct = (props) => {
    const { _id, pdname, price, des, img, type } = props.product || {};
    const history = useHistory();

    const handleDetails = (_id) => {
        const uri = `/placeOrder/${_id}`;
        history.push(uri);
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {pdname}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {type}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {des}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {price}
                    </Typography>
                    <Button onClick={() => handleDetails(_id)} variant="contained" color="inherit">BUY NOW</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};
export default AvailableProduct;