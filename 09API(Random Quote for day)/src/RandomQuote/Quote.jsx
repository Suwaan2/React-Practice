import React from 'react'
import {useLoderData} from 'react-router-dom'

function Quote() {
    const data = useLoderData()
  return (
    <div>
        Quote: {data.data[content]}
      
    </div>
  )
}

export default Quote

export const QuoteLoader = async () =>{
   const response = await fetch(`https://api.freeapi.app/api/v1/public/quotes/quote/random`)
    return response.json()
}
