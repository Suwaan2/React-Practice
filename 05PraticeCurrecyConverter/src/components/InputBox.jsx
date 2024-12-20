import React,{useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrecnyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  CurrencyDisable = false,
  AmountDisable = false,
  className = "",
}) {
  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block"
        id={amountInputId}
        >{label}</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={AmountDisable}
          onChange={
            (e = onAmountChange && onAmountChange(Number(e.target.value)))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={CurrencyDisable}
          onChange={(e)=>onCurrecnyChange(e.target.value)}
        >
          {currencyOptions.map((currency)=>{
            <option key={currency} value={currency}>
              {currency}
            </option>
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
