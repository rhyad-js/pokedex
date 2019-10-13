import React from 'react';
import './App.css';
import logo from './pokemon-logo.png'
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Pokemon Logo" className="App-logo"/>
      <h1 className="App-title">🕹️ Pokedex Game 🕹️</h1>
      <Pokegame />
    </div>
  );
}

export default App;
