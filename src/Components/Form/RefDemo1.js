import React, { useRef } from 'react'

export default function RefDemo1() {
    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const add = () => {
        const val1 = +inputRef1.current.value;
        const val2 = +inputRef2.current.value;
        alert(val1 + val2);
    };

    return (
        <div>
            num1: <input ref={inputRef1} />
            num2: <input ref={inputRef2} />
            <button onClick={add}>Add</button>
        </div>
    );
}
