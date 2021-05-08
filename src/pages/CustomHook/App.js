import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch.js';
import './App.css';

const url = 'https://course-api.com/javascript-store-products'

function App() {
  // 這個 customHook ( 取名 use 開頭 )， 傳遞一個 url 參數，並回傳一個物件，因此利用解構取出
  const { loading, products } = useFetch(url)
  console.log(loading, products);
  return (
   <div>
     <h2>{ loading? 'Loading': 'Data' }</h2>
   </div>
  );
}

export default App
