import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../Header';
import Shortener from '../Shortener';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shortener />
      </div>
    );
  }
}

export default App;
