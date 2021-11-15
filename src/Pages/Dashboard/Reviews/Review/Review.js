import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
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
        <Grid >
            <Typography variant="h2" gutterBottom component="div"> Our Customer Reviews</Typography>
            <Card sx={{ border: 0, boxShadow: 2 }}>
                <CardActionArea>
                    <Box>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h4" gutterBottom component="div">
                            {name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom component="div">
                            {comments}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating name="read-only" defaultValue={ratings} readOnly />
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
export default Review;