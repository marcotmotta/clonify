import React, { Component } from 'react'
import './LeftBar.scss';

import { HomeRounded, SearchRounded, AddRounded } from '@material-ui/icons';

export default class LeftBar extends Component {
    render() {
        return (
            <div className="left-bar">
                <div className="menu">
                    <div className="tab"><HomeRounded className="icon" fontSize="medium"/>Home</div>
                    <div className="tab"><SearchRounded className="icon" fontSize="medium"/>Search</div>
                </div>
                <div className="playlists">
                    <div className="create-playlist"><AddRounded className="icon" fontSize="medium"/>Create playlist</div>
                    <hr></hr>
                    <div>
                        Playlists
                    </div>
                </div>
            </div>
        )
    }
}
