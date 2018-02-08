import React, { Component } from 'react';
import './App.css';
import ListWeather from './components/ListWeather';

/**
 * Main component for the Weather-App application
 * 
 * @class App
 * @extends {Component}
 * @version 1.0.0
 * @author {@link https://github.com/camilaavilarinho| Camila Vilarinho}
 * @namespace App
 */
class App extends Component {
  /**
   * Renders the header and the ListWeather component 
   * @memberof App
   */
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
