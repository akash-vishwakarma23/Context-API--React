import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
  const navigate = useNavigate()
 const {id} = useParams()
  const {users} = useContext(UserContext)


  return (
    <div className='mx-20 mt-10'>
      <h1 className='text-4xl font-semibold text-red-400 mb-3'>{users[id].username}</h1>
      <h2 className='text-xl font-semibold mb-1'>{users[id].city}</h2>
      <button className='px-2 py-1 rounded-md bg-red-300' onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default Userdetails
