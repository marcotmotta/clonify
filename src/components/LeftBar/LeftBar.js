import React, { Component } from 'react'
import './LeftBar.scss';

export default class LeftBar extends Component {
    render() {
        return (
            <div className="left-bar">
                <div className="menu">
                    <div className="tab">Home</div>
                    <div className="tab">Search</div>
                </div>
                <div className="playlists">
                    <div className="create-playlist">Create playlist</div>
                    <hr></hr>
                    <div>
                        Playlists
                    </div>
                </div>
            </div>
        )
    }
}
