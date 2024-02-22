import React, { useState } from 'react'

export default function EventDemo2() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);

   /*  const changeHandler1 = (e) => {
        setNum1(+e.target.value)
    }
    const changeHandler2 = (e) => {
        setNum2(+e.target.value)
    } */

    return <>
        <p>Number-1 : <input value={num1} onChange={(e) =>setNum1(+e.target.value)} /> </p>
        <p>Number-2 : <input value={num2} onChange={(e) =>setNum2(+e.target.value)} /> </p>
        <p>Addition of {num1} & {num2} is {num1 + num2}</p>
    </>
}
