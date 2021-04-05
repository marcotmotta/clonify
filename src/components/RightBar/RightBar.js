import React, { Component } from 'react'

import './RightBar.scss';

import { Avatar } from '@material-ui/core';

export default class RightBar extends Component {
    render() {
        return (
            <div className="right-bar">
                <div className="title">Friends activity</div>
                <div className="friends">
                    {/* query */}
                    <div className="activity">
                        <Avatar className="avatar"></Avatar>
                        <div>
                            <div className="username">Friend 1</div>
                            <div className="artist">Blinding Lights</div>
                            <div className="song">The Weeknd</div>
                        </div>
                    </div>
                    <div className="activity">
                        <Avatar className="avatar"></Avatar>
                        <div>
                            <div className="username">Friend 2</div>
                            <div className="artist">Blinding Lights</div>
                            <div className="song">The Weeknd</div>
                        </div>
                    </div>
                    <div className="activity">
                        <Avatar className="avatar"></Avatar>
                        <div>
                            <div className="username">Friend 3</div>
                            <div className="artist">Blinding Lights</div>
                            <div className="song">The Weeknd</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
