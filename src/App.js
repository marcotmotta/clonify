import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

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
            <Router>
            <div className="content">
                <LeftBar />

                <Routes>
                    <Route path="/playlist" element={<Playlist />}/>
                    <Route path="/" element={<Home />}/>
                </Routes>

                <RightBar />
            </div>
            <Player />
            </Router>
        </div>
    );
}

export default App;
