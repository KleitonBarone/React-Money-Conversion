import React from 'react';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <p>Convert currencies in real-time with ease.</p>
      </header>

      <div className="grid-container">
        <Converter />
      </div>
    </div>
  );
}

export default App;
