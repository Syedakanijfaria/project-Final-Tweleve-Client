import React, { useState } from 'react';

const ManageContent = (props) => {
    const { _id, pdname, name, price, email, number, address } = props.user || {};
    const [users, setUsers] = useState([]);


    const handlePending = id => {
        const aproved = window.confirm('Your order has been aproved!');
        if (aproved) {
            const url = `https://lit-lowlands-03671.herokuapp.com/userOrder${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedcount) {
                        alert('Aproved successfully')
                        setUsers({});
                    }
                })
        }
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `https://lit-lowlands-03671.herokuapp.com/userOrder/${id}`;
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
                    }
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
                    <button className="btn btn-warning" onClick={() => handlePending(_id)} >Pending</button>
                    <button className="btn btn-warning" onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div >
    );
};
export default ManageContent;