import React, { Component } from 'react'

export default class Counterdemo1 extends Component {
    counter = 0;

    increment=()=> {
        this.counter= this.counter+1;
        console.log(this.counter)
        this.forceUpdate();
    }
  render() {
    return <>
    <h2>This is counter demo 1 Component</h2>
    <hr/>
    <div>counter value is{this.counter}</div>
    <p> 
        <button onClick={this.increment}>Increment</button>
    </p>
    </>
  }
}
