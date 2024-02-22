import React from 'react'

export default function EmployeeList({ employees, deleteEmployee, editEmployee }) {
    return <>
        <table className='table table-bordered'>
            <tbody>
                {employees.map(emp => {
                    return <tr key={emp.eId}>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td>
                            <button className='btn btn-success'>View</button>
                            <button className='btn btn-primary mx-1' onClick={() => editEmployee(emp)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteEmployee(emp.eId)}>
                                Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
