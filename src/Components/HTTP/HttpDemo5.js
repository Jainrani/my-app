import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from '../listItem/UserCard';

export default function HttpDemo5() {
    const [users ,setUsers]=useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async () =>{
        let url='http://jsonplaceholder.typicode.com/users';
        let response = await axios.get(url);
        console.log(response);
        setUsers(response.data)
        setLoading(true);

    }
 useEffect(() =>{
    fetchUsers()
 })
 
  return<>
    <h2 className='text-center'>Fetch Users  data - HTTP Demo3</h2>
    <div className='container'>
    <div className='row'>

    {loading ? (
            <p>Loading...</p>
        ) : (
            users.map(user => {
                return <UserCard user={user} key={user.id} />;
            })
        )}

   </div>
   </div>         
    
</>
  
}
