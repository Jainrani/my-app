import React, { useState } from 'react'
import  styles from'./Increment2.module.css'
import './Increment.css'

export default function Increment() {
    const[count,setCount]= useState(0);
  return (
    <>
    <div className={ `${styles.myClass1} ${styles.myClass2}`}>This is Increment Component</div>
    <div className='myClass1'>This is a div</div>
    <div id="div1" className='myClass1'>Count value is {count}</div>
    <button onClick={()=> { setCount(count+1) }}>Increment</button>
    </>
  )
  }

