import React from 'react'

export default function DatabindingDemo1() {
  let user ={
    firstName:'rani',
    lastName:'jain'

  };
  return <>
      <h2>This is Data Binding Component</h2>
      <div>
        your name is :: {user.firstName} {user.lastName}
      </div>
      </>
      
 
}
