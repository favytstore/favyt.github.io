import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrouserRouter, Switch, Route, NavLink} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your Favyt is evolving : Stay tune with Favorite Collections!!
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Favyt
        </a>
      </header>
    </div>
  );
}

export default App;
