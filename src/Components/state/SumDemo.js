
import React, { useState } from 'react'

export default function SumDemo() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState()

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="container">
      <h3 className="title"> Add Two Numbers</h3>
      <input
        type="number"
        className="input"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        className="input"
        value={num2}
        onChange={handleNum2Change}
      />
      <button className="button" onClick={handleAddition}>
        Add
      </button>
      <p className="result">Result: {result}</p>
    </div>
  );
  
}

