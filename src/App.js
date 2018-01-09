import React, { Component } from 'react';
import './App.css';
import ListWeather from './components/ListWeather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <div className="App-main">
          <ListWeather />
        </div>
      </div>
    );
  }
}

export default App;
