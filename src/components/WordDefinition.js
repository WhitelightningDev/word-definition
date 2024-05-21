import React, { useState } from 'react';
import axios from 'axios';

const WordDefinition = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  // Correctly access the environment variable
  const apiKey = process.env.REACT_APP_API_KEY; 

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`
      );
      if (response.data.length > 0 && typeof response.data[0] === 'object') {
        setDefinition(response.data[0].shortdef[0]);
      } else {
        setDefinition(null);
        setError('No definition found.');
      }
    } catch (err) {
      setError('Error fetching data.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDefinition(null);
    setError(null);
    if (word) {
      fetchDefinition();
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="form-control"
            placeholder="Enter a word"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Get Definition
            </button>
          </div>
        </div>
      </form>
      {definition && (
        <div className="alert alert-success">
          <strong>Definition:</strong> {definition}
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default WordDefinition;
