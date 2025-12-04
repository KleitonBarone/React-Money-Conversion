import React from 'react';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Moedas</h1>
        <p>Converta moedas em tempo real com facilidade.</p>
      </header>

      <div className="grid-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Conversor />
      </div>
    </div>
  );
}

export default App;
