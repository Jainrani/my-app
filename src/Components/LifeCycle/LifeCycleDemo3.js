import React, { Component } from 'react'
import ComponentA from '../memo/ComponentA'
import ComponentB from '../memo/ComponentB'

export default class LifeCycleDemo3 extends Component {
    state = {
        flag: true
    }
    render() {
        return <>
            <div>Plz change flag value to load component conditionally</div>
            <button onClick={() => { this.setState({ flag: !this.state.flag }) }}>
                toggle flag</button>

            {this.state.flag ? <ComponentA /> : <ComponentB />}
        </>
    }
}
