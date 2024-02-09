import React from 'react'

export default function Listdemo2() {
    let employees=[
        {eId: 101, name:'sanjay',sal: 5000, gender:'male'},
        {eId: 102, name:'geeta',sal: 8000, gender:'female'},
        {eId: 103, name:'sameer',sal: 9000, gender:'male'},
        {eId: 104, name:'sita',sal: 7000, gender:'female'},
        {eId: 105, name:'deepak',sal: 6000, gender:'male'},
    ];

 return <>
<h2 className='text-center'>List Demo2</h2>

<table className='table table-bordered table-scripted'>
    <thead>
        <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
        </tr>
    </thead>
    <tbody>
         {employees.map(emp=>{
       return <tr key={emp.eId}>
      <td>{emp.eId}</td>
      <td>{emp.name}</td>
      <td>{emp.sal}</td>
      <td>{emp.gender}</td>
    </tr>
    })}
    </tbody>
</table>
</>
}
