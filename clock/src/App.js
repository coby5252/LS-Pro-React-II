import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title={"Clock"}/>
        <Clock/>
      </div>
    );
  }
}

export default App;
