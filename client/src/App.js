import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Styling Import
import logo from './logo.svg';
import './App.css';

//Components Import


class App extends Component {
  
  componentDidMount(){
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
