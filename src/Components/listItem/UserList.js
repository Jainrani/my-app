import React from 'react'
import users from './users.json'
import UserCard from './UserCard'

export default function UserList() {
    return <>
    <h2 className='text-center'>User List</h2>
    <div className='container'>
      <div className='row'>
          {users.map(user=>{
            return <UserCard user={user}/>
          })}
          </div>
          </div>
          </>
}