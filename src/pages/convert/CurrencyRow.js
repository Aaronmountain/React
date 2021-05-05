import React from 'react';

function CurrencyRow( props ) 
{
  const { 
    CurrencyOptin, 
    selectedCurrency, 
    onChangeCurrency, 
    amount, 
    onChangeAmount  
  } = props

  return (
    <div>
      <input type="number" className='input' value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {CurrencyOptin.map( (option, index) =>
          {
            if (index !== 0)
            {
              return <option key={option} value={option} >{option}</option>
            }
          })}
      </select>
    </div>
  )
}

export default CurrencyRow
