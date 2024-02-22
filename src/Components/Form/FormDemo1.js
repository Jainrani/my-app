import React, { useState } from 'react'

export default function FormDemo1() {
    const [fname, setFname] = useState('sachin')
    const [lname, setLname] = useState('tendulkar');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(fname, lname)
    }

    return <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
        Last Name:
        <input name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
        <br />
        <br />
        <button>submit</button>
    </form>
}
