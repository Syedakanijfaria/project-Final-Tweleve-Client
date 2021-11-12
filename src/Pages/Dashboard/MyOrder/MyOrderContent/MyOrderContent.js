import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth.js';


const MyOrderContent = (props) => {
    const { user } = useAuth();
    const email = user.email;
    const { _id, pdname, name, price, number, address } = props.user || {};
    const [users, setUsers] = useState([]);
    const [isDelete, setIsDelete] = useState({})
    useEffect(() =>
        fetch(`http://localhost:5000/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [email, isDelete]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `http://localhost:5000/userOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                        setIsDelete(true);
                    } else { setIsDelete(false); }
                })
        }
    }

    return (
        <div className="col-md-3">
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Title: {pdname}</h5>
                    <p className="card-text">User Name: {name}</p>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Mobile Number: {number}</p>
                    <p className="card-text">Departure Date:{Date}</p>
                    <p className="card-text">Address: {address}</p>
                    <button onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};
export default MyOrderContent;