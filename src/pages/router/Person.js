import React, { useEffect, useState } from 'react'
import { data } from '../useContext/data.js';
import { Link, useParams } from 'react-router-dom';

/*
  1. 在 people 頁面中，Link 的 to 屬性，利用 模板字符串 傳遞 id
  2. Route 會去尋找符合的 path 的路徑，而 Route 中有設定 path='/:id' 且與 children 屬性搭配 。
  :id 代表會傳遞資訊，給 children 所指向的元件，
  可利用 useParams() 來找到我們所傳遞的 :id 這個資訊，
  3. 資訊內容是一個物件， key 的名稱為我們冒號後面所寫的名稱，
  例如 :id 則傳回來的物件就是 {id:'xxx'}，value 是 string ， 可利用 parseInt() 轉為數字
*/

function Person() {
  const [name, setName] = useState('default name')
  const { id } = useParams()
  useEffect(() =>{
    const personName = data.map( person =>{
      if (person.id === parseInt(id)) return person.name
    })
    setName(personName)
  },[])
  return (
    <div className='container'>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>Back People Page</Link>
    </div>
  )
}

export default Person
