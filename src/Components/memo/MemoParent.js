import React, { useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export default function MemoParent() {
    const [a, setA] = useState(100);
    const [b, setB] = useState(200);
    const [c, setC] = useState(300);

    return <>

        <button onClick={() => setA(a + 1)}>update A</button>
        <button onClick={() => setB(b + 1)} className='mx-1'>update B</button>
        <button onClick={() => setC(c + 1)}>update C</button>

        <ComponentA a={a} />
        <ComponentB b={b} />
        <ComponentC c={c} />
    </>
}
