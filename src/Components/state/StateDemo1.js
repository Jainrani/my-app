import React, { Component } from 'react'

export default class StateDemo1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter : 0
    }
  }
  
    increment=()=> {
        this.setState({counter:this.state.counter+ 1},()=>{
            console.log(this.state.counter)
        });
       
    }
  render() {
    return <>
    <h2>This is counter demo 1 Component</h2>
    <hr/>
    <div>counter value is {this.state.counter}</div>
    <p> 
        <button onClick={this.increment}>Increment</button>
    </p>
    </>
  }
}
