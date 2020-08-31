import React from 'react';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <div className="calculator-top">
        0
      </div>
      <div class="calculator-body">
        <button class="button clear-button">C</button>
        <button class="button">÷</button>
        <button class="button">7</button>
        <button class="button">8</button>
        <button class="button">9</button>
        <button class="button">x</button>
        <button class="button">4</button>
        <button class="button">5</button>
        <button class="button">6</button>
        <button class="button">-</button>
        <button class="button">1</button>
        <button class="button">2</button>
        <button class="button">3</button>
        <button class="button">+</button>
        <button class="button zero-button">0</button>
        <button class="button equals-button">=</button>
      </div>
    </header>
  );
}

export default App;
