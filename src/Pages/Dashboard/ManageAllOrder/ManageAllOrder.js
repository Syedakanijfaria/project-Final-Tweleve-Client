import React, { useEffect, useState } from 'react';
import ManageContent from './ManageContent/ManageContent.js';

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://lit-lowlands-03671.herokuapp.com/userOrder`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <h1>this is all user order review</h1>
            <div>
                {
                    users.map((user => <ManageContent
                        key={user._id}
                        user={user}
                    >
                    </ManageContent>))
                }
            </div>
        </div>
    );
};
export default ManageAllOrder;