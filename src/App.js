import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Topbanner from './Components/Topbanner/Topbanner';
import Services from './Components/Services/Services';
import Navber from './Components/Navber/Navber';
import Chart from './Components/Chart/Chart';
import Topsection from './Components/Topsection/Topsection';
import Projects from './Components/Projects/Projects';
import Vedio from './Components/Vedio/Vedio';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navber></Navber>
      <Topbanner></Topbanner>
      <Services></Services>
      <Chart></Chart>
      <Topsection></Topsection>
      <Projects></Projects>
      <Vedio></Vedio>
      {/* <Button variant="success">Success</Button>{' '} */}
    </div>
  );
}

export default App;
