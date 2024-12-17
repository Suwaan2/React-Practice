import React,{useState, useEffect} from 'react'

function useCurrency(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    }, [setData, currency])
  
  
  
    return data
}

export default useCurrency
