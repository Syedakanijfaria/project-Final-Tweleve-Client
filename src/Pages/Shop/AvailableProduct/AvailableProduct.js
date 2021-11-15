import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useHistory } from 'react-router';

const AvailableProduct = (props) => {
    const { _id, pdname, price, des, img, type } = props.product || {};
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
                        <Typography sx={{ color: 'info.main', fontWeight: 50 }} variant="h4" gutterBottom component="div">
                            {pdname}
                        </Typography>
                        <Typography variant="text" gutterBottom component="div">
                            {des}
                        </Typography>
                        <Typography variant="h4" display="block" gutterBottom>
                            Price: {price}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            {type}
                        </Typography>
                        <Button onClick={() => handleDetails(_id)} variant="contained">BUY NOW</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
export default AvailableProduct;