import React, { useState, useEffect } from 'react'

import './FriendCard.scss'

import { Avatar } from '@material-ui/core';

export default function FriendCard (props) {

    const [img, setImg] = useState('');

    let altText = 'User';

    useEffect(() => {
        fetch('https://picsum.photos/200')
            .then(response => setImg(response.url));
    }, [])

    return (
        <div className="friend-card">
            <Avatar alt={altText} src={img} className="avatar"></Avatar>
            <div>
                <div className="username">{props.name}</div>
                <div className="artist">{props.song}</div>
                <div className="song">{props.artist}</div>
            </div>
        </div>
    )
}
