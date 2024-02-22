import React, { useRef } from 'react'

export default function RefDemo2() {
    let inputRef1;
    let inputRef2;

    const add = () => {
        console.log(inputRef1.name)
        const val1 = +inputRef1.value;
        const val2 = +inputRef2.value;
        alert(val1 + val2);
    };

    return (
        <div>
            num1: <input ref={inputBox => { inputRef1 = inputBox }} />
            num2: <input ref={inputBox => { inputRef2 = inputBox }} />
            <button onClick={add}>Add</button>
        </div>
    );
}
