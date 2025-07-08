import React from 'react'
import Profile from './Components/Profile'
import { UserContext } from './Components/UserContext'

export default function App() {
  return (
    <UserContext.Provider value={{name:'Shruti'}}>
                  <Profile/>
    </UserContext.Provider>

  )
}
