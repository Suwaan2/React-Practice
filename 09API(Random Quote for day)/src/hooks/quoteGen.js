import React, { useEffect, useState } from 'react'

function quoteGen(quote) {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`https://api.freeapi.app/api/v1/public/quotes/quote/random`)
        .then((res)=> res.json())
        .then((res)=> setData(res))
        console.log(data)
    },[setData, quote]
)
console.log(data)
return data

}

export default quoteGen
