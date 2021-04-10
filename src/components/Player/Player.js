import React from 'react'

import './Player.scss';

import { Avatar, Slider } from '@material-ui/core';
import { VolumeUp, PlayCircleFilled } from '@material-ui/icons';

export default function Player () {
    return (
        <div className="player">
            <div className="song">
                <Avatar className="avatar" variant="square"></Avatar>
                <div>
                    <div className="song-name">Blinding Lights</div>
                    <div className="artist">The Weeknd</div>
                </div>
            </div>
            <div className="player-butttons">
                <div className="actions">
                    <PlayCircleFilled className="play" fontSize="large"></PlayCircleFilled>
                </div>
                <div className="song-bar">
                    <div>0:00</div>
                    <Slider className="progress-bar"/>
                    <div>4:00</div>
                </div>
            </div>
            <div className="options">
                <VolumeUp></VolumeUp>
                <Slider className="volume"/>
            </div>
        </div>
    )
}
