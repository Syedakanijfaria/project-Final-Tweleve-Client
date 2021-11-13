import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';


const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    //console.log("myOrder", myOrder);
    useEffect(() =>
        fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
        , [isDelete])

    const handleDelete = id => {
        //const proceed = window.confirm('Are you sure, you want to delete it?');
        alert('Are you sure, you want to delete it?');
        const url = `https://lit-lowlands-03671.herokuapp.com/userOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted successfully')
                    //window.location.reload();
                    const remaining = myOrder.filter(order => order._id !== id);
                    setMyOrder(remaining);
                    setIsDelete(true);
                } else { setIsDelete(false); }
            })
    }
    return (
        <div className="container">
            <h1>this is single user order review</h1>
            <div>
                {
                    myOrder.map(user =>
                        <div className="col-md-3">
                            <div className="card" style={{ "width": "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Title: {user?.pdname}</h5>
                                    <p className="card-text">User Name: {user?.name}</p>
                                    <p className="card-text">Price: {user.price}</p>
                                    <p className="card-text">Email: {user.email}</p>
                                    <p className="card-text">Mobile Number: {user.number}</p>
                                    <p className="card-text">Address: {user.address}</p>
                                    <button onClick={() => handleDelete(user._id)} >Delete</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
export default MyOrder;