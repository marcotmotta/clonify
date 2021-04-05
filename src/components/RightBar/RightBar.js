import React, { Component } from 'react'

import './RightBar.scss';

import { Button } from 'react-bootstrap';

export default class RightBar extends Component {
    render() {
        return (
            <div className="right-bar">
                <div className="title">Friends activity</div>
                <div>
                    Friends
                </div>
            </div>
        )
    }
}
