import React from 'react'

export default function Conditionaldemo3() {
    let cars=['tata','honda','maruti']
  return <div>
      {cars.length && <h2>you have {cars.length} cars</h2>}
    </div>
  
}
