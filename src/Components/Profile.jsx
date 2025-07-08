import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function Profile() {
   const user = useContext(UserContext);
  return (
 <div>Hello, {user.name}!</div>
  )
}
