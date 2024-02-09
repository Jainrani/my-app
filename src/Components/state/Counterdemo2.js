import React from 'react'

export default function Counterdemo2()  {
    let counter = 0;

    let increment=() =>{
        counter++;
        console.log(counter)
    }
  
    return <>
        <p>counter value is {counter}</p>
        <button onClick={increment}>Increment</button>
    </>
  }

