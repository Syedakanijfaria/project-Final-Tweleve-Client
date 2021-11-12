import React, { useEffect, useState } from 'react';
import ManageContent from './ManageContent/ManageContent.js';

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userOrder`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <h1>this is all user order review</h1>
            <div>
                {
                    users.map((user => <ManageContent user={user}></ManageContent>))
                }
            </div>
        </div>
    );
};
export default ManageAllOrder;