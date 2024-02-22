import React from 'react'

function ComponentC({ c }) {
    console.log('C Component rendered...')
    return (
        <div>ComponentC - c value is {c}</div>
    )
}
export default React.memo(ComponentC)
