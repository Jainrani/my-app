/* import React, { useState } from 'react'
export default function RemainingCharacter() {
    const [remaining, setRemaining] = useState(100);

    const calculateRemaining = (e) => {
        console.log(e.target , e.target.value)
        let msg = e.target.value;
        setRemaining(100 - msg.length);
    }

    return <>
        <textarea onKeyUp={calculateRemaining} />
        <p>Remaining Chars : {remaining}</p>
    </>
} */

import React, { Component } from 'react'

export default class RemainingCharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            remaining: 100
        }
    }
    calculateRemaining = (e) => {
        this.setState({ remaining: 100 - e.target.value.length })
    }
    render() {
        return <>
            <textarea onKeyUp={this.calculateRemaining} />
            <p>Remaining Chars : {this.state.remaining}</p>
        </>
    }
}