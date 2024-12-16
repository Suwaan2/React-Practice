import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "123456789"
    if(character) str += "@#$%^&*()@{}+/"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length)//Gives the index of the character from 0 to the length 
      pass += str.charAt(char) //Converts the character from the index to the string value 
    }
    setPassword(pass)

  },[length, character, number, setPassword])//Changed for the optimization

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select()//Highlight the selected current item
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)//Copy the value of the password
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, setNumber, setCharacter, passwordGenerator])//If any of the given dependincies is changed then re-render the whole component

  return(
    <div className='bg-gray-600 rounded-md w-full h-100'>

      <h1 className='text-4xl text-yellow-300'>Password Generator</h1>
    <div className='bg-gray-600 h-80 w-full flex items-center'>
    <input type="text"
    className='rounded-xl p-4 w-60 ml-5 text-center'
    placeholder='Your password ' 
    value={password}
    readOnly
    ref={passwordRef}
    />
    <button className='border-none bg-blue-500 p-3 ml-3  rounded-lg '
    onClick={copyPassToClipboard}>Copy</button>
    <input type="range"
    className='cursor-pointer ml-2'
    min={8}
    max={100}
    value={length}
    onChange={(e)=>{setLength(e.target.value)}} />
    <label htmlFor="length">Length: {length}</label>
    <input type="checkbox"
    className='ml-3'
    defaultChecked={number}
    onChange={()=>{
      setNumber((prev)=>!prev)
    }} 
    />
    <label htmlFor="Number">Number</label>
    <input type="checkbox" 
    className='ml-3'
    defaultChecked={character}
    onChange={()=>{
      setCharacter((prev) => !prev)
    }}
    />
    <label htmlFor="Character">Character</label>
  </div>
</div>
 
)

}

export default App
