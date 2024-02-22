import React from 'react'

export default function EventDemo5() {
    return <>
        <div onClickCapture={() => console.log('div clicked')}>
            div <br/>
            <span onClickCapture={() => console.log('span clicked')}>
                Span <br/>
                <button onClickCapture={() => console.log('button clicked')}>button</button>
            </span>
        </div>
    </>
}
