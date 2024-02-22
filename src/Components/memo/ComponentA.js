import React, { Component } from 'react'

export default class ComponentA extends Component {
  timerId;
  componentDidMount() {
    console.log('Comp-A mounted');
    this.timerId = setInterval(() => {
      console.log('I am a interval from comp-A')
    }, 1000)
  }
  componentWillUnmount() {
    console.log('Comp-A is about to be unmounted');
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>ComponentA</div>
    )
  }
}
