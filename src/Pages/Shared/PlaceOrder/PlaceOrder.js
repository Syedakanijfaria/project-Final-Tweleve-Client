import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';
import { useForm } from "react-hook-form";
import axios from 'axios';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() =>
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [id])

    const { displayName, email } = user;

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "Pending";
        console.log("status", data);

        axios.post('http://localhost:5000/userOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
    }
    return (
        <div className="container">
            <div className="row">
                {/* shows single product from all products */}
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <img src={details?.img} className="" alt="..." />
                    </div>
                    <div className="">
                        <h5 className="">{details?.pdname}</h5>
                        <p className="">{details?.des}</p>
                        <p>Price:$ {details?.price}</p>
                        <p>{details?.type}</p>
                    </div>
                </div>
                {/* user gives information for purchasing product */}
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Product Name: <input {...register("pdname", { required: true })} placeholder="Title" /></p><br />

                            <p>User Name: <input type="text" {...register("name")} defaultValue={displayName}
                            /></p><br />

                            <p>Mail:<input type="email" {...register("email")} defaultValue={email} /></p><br />

                            <p>Price: $<input type="number" {...register("price", { required: true })} /></p><br />

                            <p>Address: <input type="address" {...register("address", { required: true })} placeholder="Address" /></p><br />

                            <p>Mobile Number: <input type="Mobile number" {...register("number", { required: true })} placeholder="Mobile Number" /></p><br />

                            <input type="submit" value="Book Now" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default PlaceOrder;