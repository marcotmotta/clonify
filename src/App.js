import React, { useState } from 'react'

import './App.scss';

import LeftBar from "./components/LeftBar/LeftBar"
import RightBar from "./components/RightBar/RightBar"
import Player from "./components/Player/Player"

import Home from "./components/Home/Home"
import Playlist from "./components/Playlist/Playlist"

function App() {

    const [page, setPage] = useState('');

    // Every component must return one and only one div
    return (
        <div className="App">
            <div className="content">
                <LeftBar></LeftBar>
                <Playlist></Playlist>
                <RightBar></RightBar>
            </div>
            <Player></Player>
        </div>
    );
}

export default App;
