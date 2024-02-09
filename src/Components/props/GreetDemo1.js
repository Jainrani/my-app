import React, { Component } from 'react'

export default class GreetDemo1 extends Component {
  render() {
    let { name,msg }  = this.props;
    return <>
    <h3>Hi {name}, {msg}</h3>
    <h4>{this.props.children}</h4>
    </>
  }
}
