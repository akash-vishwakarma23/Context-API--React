
import React, { createContext, useState } from 'react'

export const UserContext = createContext();


const Context = (props) => {
  const [users,setUsers]  = useState([
    {id: 0 , username: 'john doe', city:'USA'},
    {id: 1 , username: 'krishna', city:'INDIA'},
    {id: 2 , username: 'julie', city:'COLAMBIA'},
  ])

  return (
    <UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>
  )
}

export default Context
 