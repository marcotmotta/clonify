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
                    <div><Avatar></Avatar></div>
                    <div><Avatar></Avatar></div>
                    <div><Avatar></Avatar></div>
                </div>
            </div>
        )
    }
}
