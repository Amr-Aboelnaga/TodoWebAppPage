import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'
import useWindowDimensions from './hooks/windowSizeHook';

function App() {
  const { height, width } = useWindowDimensions()

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> */}
      <Iframe url="https://shielded-earth-28667.herokuapp.com/"
        width={width}
        height={height}
        id="myId"
        className="myClassname"
        display="initial"
        position="relative" />
      {/* Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
