import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth.js';
//import { useForm } from "react-hook-form";
//import axios from 'axios';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() =>
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [id])

    // const { displayName, email } = user;

    //const { register, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     data.status = "Pending";
    //     console.log("status", data);

    //     axios.post('https://morning-falls-44195.herokuapp.com/users', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 reset();
    //             }
    //         })
    // }
    return (
        <div className="container">
            <div className="row">
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

                {/* <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Tour Tilte: <input {...register("Title", { required: true })} placeholder="Title" /></p><br />
                            <p>User Name: <input type="text" {...register("Name")} defaultValue={displayName}
                            /></p><br />
                            <p>Gender: <select {...register("Gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select></p><br />
                            <p>Mail:<input type="email" {...register("Email")} defaultValue={email} /></p><br />
                            <p>Price: $<input type="number" {...register("Price", { required: true })} /></p><br />
                            <p>Departure Date: <input type="date" {...register("Date", { required: true })} placeholder="Departure Date" /></p><br />
                            <p>Address: <input type="address" {...register("Address", { required: true })} placeholder="Address" /></p><br />
                            <p>Mobile Number: <input type="Mobile number" {...register("Number", { required: true })} placeholder="Mobile Number" /></p><br />
                            <input type="submit" value="Book Now" />
                        </form>
                    </div>
                </div> */}
            </div >
        </div >
    );
};

export default PlaceOrder;