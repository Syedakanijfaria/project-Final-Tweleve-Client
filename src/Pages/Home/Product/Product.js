import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from "@mui/material";
import { useHistory } from 'react-router';


const Product = (props) => {
    const { _id, pdname, des, img, type } = props.product || {};

    const history = useHistory();

    const handleDetails = (_id) => {
        const uri = `/placeOrder/${_id}`;
        history.push(uri);
    }
    return (
        <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {pdname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {type}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {des}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Button onClick={() => handleDetails(_id)} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>BUY NOW</Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
export default Product;