import React from 'react';
import './App.css';
import Conversor from './components/Conversor'
import Placargol from './components/Placargol'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="CAD"/>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="EUR"/>
      </div>
      <div className="linha">
        <Placargol timeA="Flamengo" timeB="Vasco"/>
      </div>
      <div className="linha">
        <Todolist/>
      </div>
    </div>
  );
}

export default App;
