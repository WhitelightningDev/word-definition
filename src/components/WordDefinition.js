import React, { useState } from 'react';
import axios from 'axios';

const WordDefinition = () => {
  // State variables to manage the word input, definition result, and error messages
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  // Correctly access the environment variable for the API key
  const apiKey = process.env.REACT_APP_API_KEY; 

  // Function to fetch the definition of the word using the API
  const fetchDefinition = async () => {
    try {
      // Make an API request using axios
      const response = await axios.get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`
      );
      // Check if the response contains a valid definition
      if (response.data.length > 0 && typeof response.data[0] === 'object') {
        // Set the definition state to the first short definition found
        setDefinition(response.data[0].shortdef[0]);
      } else {
        // Set the definition state to null and show an error message if no definition is found
        setDefinition(null);
        setError('No definition found.');
      }
    } catch (err) {
      // Handle errors by setting the error state
      setError('Error fetching data.');
    }
  };

  // Handle form submission to fetch the word definition
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setDefinition(null); // Clear previous definition
    setError(null); // Clear previous error
    if (word) {
      fetchDefinition(); // Fetch the definition if a word is entered
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
      {/* Display the definition if available */}
      {definition && (
        <div className="alert alert-success">
          <strong>Definition:</strong> {definition}
        </div>
      )}
      {/* Display an error message if there was an error */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default WordDefinition;
