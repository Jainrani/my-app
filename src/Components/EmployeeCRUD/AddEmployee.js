import React, { useState } from 'react'

export default function AddEmployee({ addEmployee }) {
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [emp, setEmp] = useState(initialEmp);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }
    const addMyEmployee = (emp) => {
        addEmployee(emp);
        setEmp(initialEmp);
    }
    return <>
        <h3>Employee Add</h3>
        <p>eId : <input value={emp.eId} name='eId' onChange={(e) => changeHandler(e)} /></p>
        <p>Name : <input value={emp.name} name='name' onChange={(e) => changeHandler(e)} /></p>
        <p>Salary : <input value={emp.sal} name='sal' onChange={(e) => changeHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={() => addMyEmployee(emp)} className='btn btn-primary'>Add Employee</button>
        </div>
    </>
}
