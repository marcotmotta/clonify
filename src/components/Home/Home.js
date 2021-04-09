import React, { Component } from 'react'

import './Home.scss';

import LeftBar from "./../LeftBar/LeftBar"
import RightBar from "./../RightBar/RightBar"
import Player from "./../Player/Player"

import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

export default class Home extends Component {
    render() {
        return (
            // Every component must return one and only one div
            <div className="home">
                <LeftBar></LeftBar>
                <div className="content">
                   {/*  <div className="card">
                        <div className="test"></div>
                        <div className="title">
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="test"></div>
                        <div className="title">
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="test"></div>
                        <div className="title">
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </div>
                    </div> */}
                </div>
                <RightBar></RightBar>
                <Player></Player>
            </div>
        )
    }
}
