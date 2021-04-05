import logo from './logo.svg';
import './App.scss';

//Components
import Content from "./components/Content/Content"
import LeftBar from "./components/LeftBar/LeftBar"

function App() {
  return (
    <div className="App">
      <LeftBar ></LeftBar>
      <Content ></Content>
    </div>
  );
}

export default App;
