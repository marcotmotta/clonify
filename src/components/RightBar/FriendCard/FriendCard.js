import React, { Component } from 'react'

import './FriendCard.scss'

import { Avatar } from '@material-ui/core';

export default class FriendCard extends Component {
    render() {

        let letter = 'U';

        return (
            <div className="friend-card">
                <Avatar alt={letter} src="" className="avatar"></Avatar>
                <div>
                    <div className="username">{this.props.name}</div>
                    <div className="artist">{this.props.song}</div>
                    <div className="song">{this.props.artist}</div>
                </div>
            </div>
        )
    }
}
