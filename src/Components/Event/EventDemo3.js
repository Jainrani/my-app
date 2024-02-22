import React, { useState } from 'react'

export default function EventDemo3() {
    let [obj, setObj] = useState({ num1: 0, num2: 0 });
    const changeHandler = (e) => {
        setObj({ ...obj, [e.target.name]: +e.target.value })
    }
    return <>
        <p>Number-1 : <input name='num1' value={obj.num1} onChange={(e) => changeHandler(e)} /> </p>
        <p>Number-2 : <input name='num2' value={obj.num2} onChange={(e) => changeHandler(e)} /> </p>
        <p>Addition of {obj.num1} & {obj.num2} is {obj.num1 + obj.num2}</p>
    </>
}
