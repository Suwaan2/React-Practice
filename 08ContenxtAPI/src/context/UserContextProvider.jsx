import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}// j aaya pani as it is pass garnhi
        </UserContext.Provider>
    )

}

export default UserContextProvider
