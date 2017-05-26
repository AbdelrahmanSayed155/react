import React, { Component }
from 'react';
import logo from './logo.svg';
import './App.css';
import {WebTwain} from './WebTwain';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={
      logo} className="App-logo" alt="logo" />
          <h2>Dynamic Web TWAIN with React</h2>
        </div>
        <WebTwain/>
      </div>
    );
  }
}

export default App;
