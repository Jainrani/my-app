
import React, { useState } from 'react'


export default function TwoNumbers() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    const[division,setDivision] =useState(0);
  
    const AddTotal= () => {
      setSum(num1 + num2);
      const AddTotal= () => {
        setDivision(num1 - num2);
    }
  
    return (
      <div style={{textAlign:'center'}}>
        <input type="number" value={num1} onChange={(e) =>setNum1(Number(e.target.value))} />
        <input type="number" value={num2} onChange={(e) =>setNum2(Number(e.target.value))} />
<div style={{textAlign:'center'}}>
        <button onClick={AddTotal}>Add</button>
        <button onClick={AddTotal}>division</button>
        </div>
        <p>Result:{sum}</p>
        
      </div>
    );
    }
}