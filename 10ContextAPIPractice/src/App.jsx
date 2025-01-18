
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

function App() {
 

  return(
    <UserContextProvider>
    <h2>Context API</h2>
    <Login/>
    <Profile/>

    </UserContextProvider>
  )
}

export default App
