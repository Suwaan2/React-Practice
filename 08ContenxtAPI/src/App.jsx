import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1 className='text-4xl'>Context API (Mini context)</h1>
    </UserContextProvider>
  )
}

export default App
