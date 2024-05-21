// src/App.js
import React from 'react';
import './App.css';
import WordDefinition from './components/WordDefinition';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-dark text-white">
        <h1>Word Definition App</h1>
      </header>
      <main>
        <WordDefinition />
      </main>
    </div>
  );
}

export default App;
