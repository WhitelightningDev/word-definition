import React from 'react';
import './App.css'; // Importing CSS file for styling
import WordDefinition from './components/WordDefinition'; // Importing WordDefinition component

function App() {
  return (
    <div className="App">
      {/* Header section with a dark background and white text */}
      <header className="App-header bg-dark text-white">
        <h1>Word Definition App</h1> {/* Title of the application */}
      </header>
      {/* Main section where the WordDefinition component is rendered */}
      <main>
        <WordDefinition /> {/* Render the WordDefinition component */}
      </main>
    </div>
  );
}

export default App;
