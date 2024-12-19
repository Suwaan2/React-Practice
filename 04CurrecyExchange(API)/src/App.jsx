import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox.jsx'
import { use } from 'react'
import useCurrency from './Hooks/useCurrency.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt , setConvertedAmt] = useState(0)

  const currencyInfo = useCurrency(from)

  return (
    <>
  <h1 className=' text-4xl'>Currency Converter</h1>
   
    </>
    
  )
}

export default App
