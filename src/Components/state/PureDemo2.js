import React, { useState } from 'react'

export default function PureDemo2() {
    let [color, setColor] = useState('red');

    return <>
        {console.log('PureDemo Render() called')}
        <h3>Color is: {color}</h3>
        <button onClick={() => setColor('Red')}>Change Color</button>
    </>
}
