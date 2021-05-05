import React from 'react'

const Edit = ( props ) =>
{
  // 原先放在Edit箭頭函式的參數中直接解構，現在將參數改為 props ， 利用 props 來解構
  const { 
    add, submmitStatus, editing, editInfo,
    note, setNote, date, setDate, time, setTime
  } = props

  /* 將原先這裡的三個useState放到父層去，並從父層當作props傳給 Edit 和 Item ，， 
     這樣就可以共同使用 Edit 裡面的 input ，能夠輸入Edit裡的資料更新data，也能夠編輯Item裡的資料更新data 
  */
  function noteChange(e) {
    setNote(e.target.value)
  }

  function dateChange(e) {
    setDate(e.target.value)
  }

  function timeChange(e) {
    setTime(e.target.value)
  }
  
  const addItem = (e) =>
  {
    e.preventDefault();
    if (note === '' || date === '' || time === '') return alert('Sorry,you must forgot some info')
    // 新增資料後，submmitStatus 改成true，才能順利執行那個，綁定相依關係在data的 useEffect
    submmitStatus.current = true;
    const id = new Date().getTime().toString();
    // add 是從父元件身上傳下來的 props，而這個 props 的值等於 setData()
    add( (prevData) =>
    {
      // setData()的參數代表data，我們要先取出上一次的data值( 即初始值空陣列 )再將資料放入data內
      // if ( !editing.current ) 就return一樣。 if(editing.current) 則 const olddata = if(判斷id一樣的不回傳)，return [{id:id,note,date, time},...olddata]
      if(!editing.current)
      {
        return [{
          id: id,
          note,
          date,
          time
        }, ...prevData]
      }
      if (editing.current)
      {
        // 將item點擊編輯按鈕時改的 true，再上傳至資料庫後改回false
        editing.current = false;
        const oldData = prevData.filter(item => item.id !== editInfo.id)
        return [{
          id: id,
          note,
          date,
          time
        }, ...oldData]
      }
    })
    setNote('')
    setDate('')
    setTime('')
  }

  return (
    <form className="todolist">
      <p className="alertMessage"></p>
      <h1>TodoList Menu</h1>
      <div className="list-input">
        {/* 如何取得 input 的值，JS可能是透過選取到標籤後.value 來取值
        1. React 的方式，利用為每個 input元件各自綁定一個 useState 來取得 value。
        2. input value綁定useState的變數 而將 onChange再綁定useState的函式來達成雙向綁定的概念，value的值改變，onChange觸發useState函式改變useState的變數，而我們useState的變數就是input最後的結果，利用此結果去新增item*/}
        <strong className='inputText'>Content</strong>
        <input
          type="text"
          placeholder="Ex. Let`s Coding Every Day"
          value={note}
          onChange={noteChange}
        />
        <strong className='inputText'>Date</strong>
        <input
          type="date"
          value={date}
          onChange={dateChange}
        />
        <strong className='inputText'>Time</strong>
        <input 
          type="time"
          value={time}
          onChange={timeChange}
        />
      </div>
      <button type="submit" className="submit-btn" onClick={addItem}>
        {editing.current? 'edit':'submit'}
      </button>
    </form>
  )
}

export default Edit