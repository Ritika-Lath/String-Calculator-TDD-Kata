import React, { useState } from 'react'
import { addString } from '../utils/addString';

const StringCalculator = () => {

  const [stringInput, setStringInput] = useState('');
  const [sum, setSum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(addString(stringInput));
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <stringInput
          type="text"
          value={stringInput}
          onChange={(e) => setStringInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Result: {sum}</h2>
      </div>
    </div>
  );
};

export default StringCalculator;