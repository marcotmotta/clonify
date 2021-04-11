import React, { useState, useEffect} from 'react'

import './RightBar.scss';

import FriendCard from './FriendCard/FriendCard';

import { CircularProgress } from '@material-ui/core';

export default function RightBar () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json));
    }, [])

    if (0) {
        return (
            <div className="right-bar">
                <div className="title">Friends activity</div>
                <div className="friends">
                    {users.map(user => (
                        <FriendCard
                            key={user.name}
                            name={user.name}
                            artist={user.company.bs}
                            song={user.company.name}
                        />
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="right-bar">
                <div className="title">Friends activity</div>
                <div className="loading">
                    <CircularProgress color="white"/>
                </div>
            </div>
        )
    }
}