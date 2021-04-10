import React from 'react'

import './FriendCard.scss'

import { Avatar } from '@material-ui/core';

export default function FriendCard (props) {

    let altText = 'User';

    return (
        <div className="friend-card">
            <Avatar alt={altText} className="avatar"></Avatar>
            <div>
                <div className="username">{props.name}</div>
                <div className="artist">{props.song}</div>
                <div className="song">{props.artist}</div>
            </div>
        </div>
    )
}
