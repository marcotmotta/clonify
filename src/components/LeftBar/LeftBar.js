import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './LeftBar.scss';

import { HomeRounded, SearchRounded, AddRounded } from '@material-ui/icons';

export default function LeftBar () {
    return (
        <div className="left-bar">
            <div className="menu">
                <Link to="/"><div className="tab"><HomeRounded className="icon"/>Home</div></Link>
                <Link to="/playlist"><div className="tab"><SearchRounded className="icon"/>Search</div></Link>
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
