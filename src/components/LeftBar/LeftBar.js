import React, { Component } from 'react'
import './LeftBar.scss';

import { HomeRounded, SearchRounded, AddRounded } from '@material-ui/icons';

export default class LeftBar extends Component {
    render() {
        return (
            <div className="left-bar">
                <div className="menu">
                    <div className="tab"><HomeRounded className="icon"/>Home</div>
                    <div className="tab"><SearchRounded className="icon"/>Search</div>
                </div>
                <div className="playlists">
                    <div className="create-playlist"><AddRounded className="icon"/>Create playlist</div>
                    <hr></hr>
                    <div className="list">
                        {/* query */}
                        <div>Playlist 1</div>
                        <div>Playlist 2</div>
                        <div>Playlist 3</div>
                        <div>Playlist 4</div>
                    </div>
                </div>
            </div>
        )
    }
}
