import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Styling Import
import logo from './logo.svg';
import './App.css';

//Components Import








class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dog Ears - Read Like You Mean It</h1>
          
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
