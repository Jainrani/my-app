import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserCard from '../listItem/UserCard';

export default function HttpDemo3() {
    const [users ,setUsers]=useState([]);

    const fetchUsers = async () =>{
        let url='http://jsonplaceholder.typicode.com/users';
        let response = await axios.get(url);
        console.log(response);
        setUsers(response.data)

    }

 useEffect(() =>{
    fetchUsers()
 })
  return<>
    <h2 className='text-center'>Fetch Users  data - HTTP Demo3</h2>
    <div className='container'>
        <div className='row'>
        {users.map(user => {
            return <UserCard user={user}  key={user.id}/>
        })}

   </div>
   </div>         
    
</>
  
}
