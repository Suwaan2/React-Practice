import React, { useState } from 'react'
import quoteGen from './hooks/quoteGen'

function Font() {
    const[display , setDisplay] = useState()
    const Quote = quoteGen()
  return (
    <div>
      
    </div>
  )
}

export default Font
