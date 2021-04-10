import './App.scss';

import LeftBar from "./components/LeftBar/LeftBar"
import RightBar from "./components/RightBar/RightBar"
import Player from "./components/Player/Player"

import Home from "./components/Home/Home"

function App() {
    // Every component must return one and only one div
    return (
        <div className="App">
            <div className="content">
                <LeftBar></LeftBar>
                <Home ></Home>
                <RightBar></RightBar>
            </div>
            <Player></Player>
        </div>
    );
}

export default App;
