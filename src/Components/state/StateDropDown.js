import React, { useState } from 'react'

export default function StateDropDown() {
    const stateNames =['Karnataka','Odisha','Tamilnadu','kerala','Bihar', 'UP']
   const [selectedState, setselectedState]= useState('')
  return <>

  <h2>You have Selected {selectedState}</h2>
  </>
}
