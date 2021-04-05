import React, { Component } from 'react'

import './Player.scss';

export default class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="song"></div>
                <div className="player-butttons"></div>
                <div className="options"></div>
            </div>
        )
    }
}
