import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrecnyChange,
    selectCurrency = 'usd',
    currencyOptions = [],
    onCurrencyDisable = false,
    onAmountDisable = false,
    className = ''
    
}) {
  return (
    <div>
        <div>
            <label htmlFor="label">{label}</label>
            <input type="text" />
            <div>
                <select name="" id="">
                   {currencyOptions.map((currency)=>{
                     <option key={currency} value={currency}>
                        {currency}
                     </option>
                   })}
                </select>
            </div>
        </div>
      
    </div>
  )
}

export default InputBox
