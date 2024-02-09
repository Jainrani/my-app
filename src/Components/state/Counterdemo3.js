import React, {useState} from 'react'

export default function Counterdemo3() {
    let [counter,updateCounter]=useState(0);

    let increment=()=>{
        updateCounter(++counter)
        console.log(counter)
    }
    return <>
    <p>counter value is {counter}</p>
    <button onClick={increment}>Increment</button>
</>
}
