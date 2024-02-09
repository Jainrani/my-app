import React from "react";


export default class header extends React.Component {
  render(){
  return<h1 style={{backgroundColor:'blueviolet', color: 'white', textAlign: 'center', margin: 0}}>
      This is My Header
      </h1>
  }
}

export function addition (a,b){
      console.log(a+b)
}
