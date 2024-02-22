import React, { Component, PureComponent } from 'react'

export default class PureDemo1 extends PureComponent {
    state = {
        color: 'red'
    }
    changeColor = () => {
        this.setState({ color: 'blue' });
    }
    render() {
        console.log('PureDemo Render() called')
        return <>
            <h3>Color is: {this.state.color}</h3>
            <button onClick={this.changeColor}>Change Color</button>
        </>
    }
}
