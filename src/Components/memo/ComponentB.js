import React, { Component } from 'react'

export default class ComponentB extends Component {
  componentDidMount() {
    console.log('Comp-B mounted')
  }
  componentWillUnmount() {
    console.log('Comp-B is about to be unmounted')
  }
  render() {
    return (
      <div>ComponentB</div>
    )
  }
}
