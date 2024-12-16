import React,{useState} from 'react'

function Button() {
    const [backcolor, setBackcolor] = useState('lightblue')

  return (
    <div className='w-100 h-screen text-center' style={{backgroundColor: backcolor}}>
        <h1 className='text-4xl text-white mb-8'>Backgroung Changer</h1>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'black', backgroundColor:'red'}}
        onClick={()=>setBackcolor('red')}>Red</button>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'black', backgroundColor:'yellow'}}
        onClick={()=>setBackcolor('yellow')}>Yellow</button>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'black', backgroundColor:'green'}}
        onClick={()=>setBackcolor('green')}>Green</button>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'white', backgroundColor:'blue'}}
        onClick={()=>setBackcolor('blue')}>Blue</button>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'black', backgroundColor:'Pink'}}
        onClick={()=>setBackcolor('pink')}>Pink</button>
        <button className='w-20 h-10 rounded-xl m-2' style={{color: 'black', backgroundColor:'orange'}}
        onClick={()=>setBackcolor('orange')}>Orange</button>
      
    </div>
  )
}

export default Button
