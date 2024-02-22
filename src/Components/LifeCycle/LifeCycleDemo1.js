import React, { Component } from 'react'

export default class LifeCycleDemo1 extends Component {
    constructor(props) {
        console.log('I am Constructor')
        super(props)
        this.state = { // initialize state data
            counter: 0
        }

    }
    static getDerivedStateFromProps(props, state) {
        console.log('I am getderivedstatefrom props')
        // return { counter: props.counter };
        return { state }
    }
    shouldComponentUpdate() { // default = true
        console.log('I am should component update')
        return true;
    }
    componentDidMount() {
        console.log('I am compoennet did mount');
        document.getElementById('div1').style.color = 'red';
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        console.log(`Previous value is ${prevState.counter} and current value is ${this.state.counter}`)
        return null;
    }
    componentDidUpdate(){
        console.log('componet did update')
    }
    render() {
        console.log('I am Render function')
        return <>
            <div id='div1'>Counter value is {this.state.counter} </div>
            <p>
                <button onClick={this.increment}>Increment</button>
            </p>
        </>
    }
}
