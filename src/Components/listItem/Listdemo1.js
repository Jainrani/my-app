import React from 'react'

export default function Listdemo1() {
    let cities=['mumbai','bangalore','pune','chennai']
  return <>
  <ol>
    {cities.map((city,ind)=>{
        return<li key={ind}>{city}</li>
    })}
  </ol>
  <select>
    <option>--select--</option>
    {cities.map((city,ind)=>{
        return<option key={ind}>{city}</option>
    })}
  </select>
  </>
   
  
}
