import React, { useState } from 'react'
import UserContext from './UserContext'
import { use } from 'react'

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}// j aaya pani as it is pass garnhi
        </UserContext.Provider>
    )

}

export default UserContextProvider
