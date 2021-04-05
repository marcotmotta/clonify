import React, { Component } from 'react'

import './Home.scss';

import LeftBar from "./../LeftBar/LeftBar"
import RightBar from "./../RightBar/RightBar"

export default class Home extends Component {
    render() {
        return (
            // Every component must return one and only one div
            <div className="home">
                <LeftBar></LeftBar>
                Content
                <RightBar></RightBar>
            </div>
        )
    }
}
