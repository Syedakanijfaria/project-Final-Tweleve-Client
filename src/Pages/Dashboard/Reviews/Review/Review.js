
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


// const StyledRating = styled(Rating)({
//     '& .MuiRating-iconFilled': {
//         color: '#ff6d75',
//     },
//     '& .MuiRating-iconHover': {
//         color: '#ff3d47',
//     },
// });
const Review = (props) => {
    const { name, comments, ratings } = props.review || {};
    // const history = useHistory();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <Box><Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography></Box>
                <Box><Typography variant="h6" gutterBottom component="div">
                    {comments}
                </Typography></Box>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Rating name="read-only" defaultValue={ratings} readOnly />
                </Box>

                {/* <Typography variant="h6" gutterBottom component="div">
                    {ratings}
                </Typography> */}
            </Card>
        </Grid>
    );
};
export default Review;