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
                    <Card className="card">
                        <div className="test"></div>
                        <CardContent>
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </CardContent>
                    </Card>
                    <Card className="card">
                        <div className="test"></div>
                        <CardContent>
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </CardContent>
                    </Card>
                    <Card className="card">
                        <div className="test"></div>
                        <CardContent>
                            <div><strong>Blinding Lights</strong></div>
                            <div>The Weeknd</div>
                        </CardContent>
                    </Card>
                </div>
                <RightBar></RightBar>
                <Player></Player>
            </div>
        )
    }
}
