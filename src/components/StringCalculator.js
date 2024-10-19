import React, { useState } from 'react';
import { addString } from '../utils/addString';

const StringCalculator = () => {
  const [stringInput, setStringInput] = useState('');
  const [sum, setSum] = useState(0);
  const [error, setError] = useState(''); // New state for error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const result = addString(stringInput);
      setSum(result);
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stringInput}
          onChange={(e) => setStringInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Result: {error ? 'Error' : sum}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
};

export default StringCalculator;
