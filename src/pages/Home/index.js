import React, { useState, useEffect, useRef } from 'react';
import List from './components/List.js';
import Edit from './components/Edit.js';
import './index.css';
import { API_GET_API } from '../../global/constantsToDoList.js';

function Home() {
  const [data,setData] = useState([])
  const submmitStatus = useRef(false)
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [editInfo, setEditInfo] = useState()
  const editing = useRef(false)

  async function fetchData(setData) 
  {
    // async 非同步，一開始先執行第一個 await 後，接續執行後面的 await，過程中其他要做的事情仍有繼續進行
    // 同樣是的 promise ，但很明白的從上往下依序執行 ，而不會像.then(callback)，畢竟一個.then 就會放callback
    const res = await fetch(API_GET_API)
    const { data } = await res.json();
    // 因為取得物件含有data和id，因此要利用解構取得data資料，後利用setData放入 useState data陣列中
    setData(data)
  }

  async function fetchsetData(data)
  {
    // async 非同步，一開始先執行第一個 await 後，接續執行後面的 await，過程中其他要做的事情仍有繼續進行
    // 同樣是的 promise ，但很明白的從上往下依序執行 ，而不會像.then(callback)，畢竟一個.then 就會放callback
    await fetch(API_GET_API,
      {
        method:'PUT',
        headers:
        {
          'Content-type':'application/json'
        },
        body: JSON.stringify({ data }) // 資料庫中，data 是被用物件包住的，所以這裡 PUT 要用中括號將 data 包起來
      })
  }

  useEffect(() => {
    // 阻止 useEffect 渲染後自動執行函式
    if (!submmitStatus.current)
    {
      // 一開始設為 false ， !後為true ，執行return 跳出 useEffect() 
      return
    }
    // 再每次上傳資料後，將 useRef 改為 true 就要利用 useRef 的 current 屬性
    // async awiat 只是另一種 promise 物件，依舊能用 .then 
    // 何時會改成 true? 在新增和刪除按鈕時會改成true，因此要把 submmitStatus v下放到按鈕上
    fetchsetData(data)
      .then( data => submmitStatus.current = false )

  }, [data])

  useEffect( () =>
  {
    fetchData(setData)
  }, [])

  return (
    <div className='container'>
        {/* 1. Edit元件，下放的 props(即 add )=setData() ，並改變了 data 
            2. 父元件 Home 知道了，去通知領有 props(即 listData )=data 的子元件，讓他知道要工作了*/}
      <Edit add={setData}
            submmitStatus={submmitStatus}
            note={note}
            date={date}
            time={time}
            setNote={setNote}
            setDate ={setDate}
            setTime ={setTime}
            editing={editing}
            editInfo={editInfo}
      />
        {/* DataControl 這個 props值為setData，是因為也要改變data值，
        由於要再 Item 元件內改變 data 值，所以先傳給 List元件後，再下放到 Item元件*/}
      <List 
        listData={data} 
        deleteData={setData}
        submmitStatus={submmitStatus}
        setNote={setNote}
        setDate={setDate}
        setTime={setTime}
        editing={editing}
        seteditInfo={setEditInfo}
      />
    </div>
  )
}

export default Home