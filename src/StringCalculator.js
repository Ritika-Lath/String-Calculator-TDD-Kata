import React,{useState} from 'react'
import { addString } from './utils/addString';

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
  // console.log("input",typeof(input))
    const handleSubmit = (e) => {
      e.preventDefault();
      setResult(addString(input));
    };
  
    return (
      <div>
        <h1>String Calculator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers"
          />
          <button type="submit">Calculate</button>
        </form>
        <div>
          <h2>Result: {result}</h2>
        </div>
      </div>
    );
  };
  
  export default StringCalculator;