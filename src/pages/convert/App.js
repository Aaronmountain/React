import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow.js';
// 最後一部的選項更改匯率也要憶起改做不出來

const BASE_URL = 'https://apiservice.mol.gov.tw/OdService/download/A17000000J-030185-eun';

 function App()
 {
  const [CurrencyOptin, setCurrencyOptin] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exChangeRate, setExChangeRate] = useState([])
  const [amount, setAmount] = useState(1) // 給予 From 的那個國家的初始值
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount;
  if (amountInFromCurrency)
  {
    // from 轉變成 toAmount 要乘以 exChangeRate 
    fromAmount = amount;
    toAmount = amount * exChangeRate;
  }
  if (!amountInFromCurrency)
  {
    // toAmount 轉變成 from 要除以 exChangeRate
    fromAmount = amount;
    toAmount = amount / exChangeRate;
  }

  function handlerFromAmountChange(e)
  {
    // 這裡是從　from 到 to 的轉換，對應上面 if判斷式，要設為 true
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  function handlerToAmountChange(e) {
    // 這裡是從 to 到 from 的轉換，對應上面 if判斷式，要設為 false
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
   
  useEffect( () =>
  {
    fetch(BASE_URL)
      .then( res => res.json())
      .then( data => 
      {
        const firstCurrency = Object.keys(data[23])
        // Object.keys(obj) 指定物件所有可列舉之屬性組成的字串陣列
        setCurrencyOptin([...Object.keys(data[23])])
        setFromCurrency(firstCurrency)
        setToCurrency(Object.keys(data[23])[3])
        setExChangeRate(data[23].['新台幣'])
        // console.log(data[23].['新台幣']);
      })
  },[])

  return (
    <div>
      <h1>Convert</h1>
      <CurrencyRow 
      CurrencyOptin={CurrencyOptin}
      // component 的 select value 等於下放的 selectedCurrency，
      // 若要更改其下放 selectedCurrency，就要在 component 設定 change 事件，其函式為 props，
      // 因此父元件要設立一個 下放的 change 函式當作 props 下放
      // 函式為  e => setFromCurrency(e.target.value)
      // 等同於你將 set函式下放，並在 component 建立 change 函式，再利用props為set函式來改selectedCurrency
      selectedCurrency={fromCurrency}
      onChangeCurrency={ e => setFromCurrency(e.target.value)}
      amount={fromAmount}
      onChangeAmount={ handlerFromAmountChange }
      />
      <div className='equals'> = </div>
      <CurrencyRow 
      CurrencyOptin={CurrencyOptin} 
      // component 的 select value 等於 selectedCurrency
      selectedCurrency={toCurrency}
      onChangeCurrency={ e => setToCurrency(e.target.value)}
      amount={toAmount}
      onChangeAmount={ handlerToAmountChange }
      />
    </div>
    )
}

export default App