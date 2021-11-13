import { Alert, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth.js";


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    //const [success, setSuccess] = useState(false);
    const { displayName, email } = user;

    const onSubmit = data => {

        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
    }
    return (
        <Container>
            <Box>
                <Typography variant="h4" gutterBottom component="div">
                    Write Down your Review
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="name"
                        {...register("name")}
                        defaultValue={displayName} />
                    <br />
                    <input
                        className="input-field"
                        type="text"
                        {...register("comments", { required: true })}
                        name="comments"
                        placeholder="comments"
                    /><br />
                    <input
                        className="input-field"
                        type="number"
                        {...register("ratings", { required: true, min: 0, max: 5 })}
                        name="ratings"
                        placeholder="ratings"
                    /><br />
                    <input
                        className="submit-btn"
                        type="submit"
                        value="Review" />
                </form>
                {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
            </Box>
        </Container>
    );
};
export default AddReview;