import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'


const User = () => {
 const {users,setUsers} = useContext(UserContext);

  return (
    <div className='ml-40 mt-6    '>
      <h1 className='text-4xl font-semibold'>User List</h1>
      <div className='flex flex-col mb-3'>
      {users.map((u)=>( <Link key={u.id} to={`/user/${u.id}`} className='px-2 py-1 w-1/2 bg-red-200 mb-3'>{u.username}</Link>))}
     
      </div>
    </div>
  )
}

export default User
