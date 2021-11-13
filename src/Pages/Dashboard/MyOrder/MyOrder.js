import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';
import MyOrderContent from './MyOrderContent/MyOrderContent.js';

const MyOrder = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() =>
        fetch(`http://localhost:5000/userOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [])
    return (
        <div className="container">
            <h1>this is single user order review</h1>
            <div>
                {
                    users.map((user => <MyOrderContent
                        key={user._id}
                        user={user}
                    >
                    </MyOrderContent>))
                }
            </div>
        </div>
    )
}
export default MyOrder;