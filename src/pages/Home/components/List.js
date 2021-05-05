import React, { useState,useEffect } from 'react';
import Item from './Item.js';


const List = (props) => {
  const { listData, deleteData, submmitStatus, setNote, editing, seteditInfo, setDate, setTime } = props
  /* 利用 useState 設立初始的 className。
  useEffect 綁定 listData， 確認是否存在 Item ， 判斷是否要添加 show-Container 這個 className */
  const [listContainerDisplay, setlistContainerDisplay] = useState('list-container')
  useEffect(() => {
    if (listData.length > 0) setlistContainerDisplay('list-container show-Container')
    if (listData.length === 0) setlistContainerDisplay('list-container')
  }, [listData])

  return (
    <div className={listContainerDisplay}>
      <div className="list">
        {
          // 1. listData 即 props ，從父元件的 useState 身上拿到的資料
          // 2. React 每個 item 都有自己獨一無二的 key ， 不要利用 index 當 key ，因為陣列是會改變的，index 不一定代表當下那個 item
          // Item 元件中加入 note={item.note} date={item.date} time={item.time} 這樣的屬性是可以的，但只是陣列可能會有空值
          listData.map(item => 
            {
              // 可以利用 解構的方式，為空值設立一個預設值，此時 item 帶有 有三個參數的陣列，建立一個陣列有三個參數，去接 item 裡面key名稱相同所擁有的值
              const {note, date, time, id} = item;
              /* 1. 左邊的 note 會當作 props 傳給 Item 元件，
                 2. 右邊的 note 代表 item陣列裡面 key為note 的值*/
            return <Item
                      key={id} 
                      id={id}
                      note={note} 
                      date={date} 
                      time={time} 
                      deleteData={deleteData}
                      submmitStatus={submmitStatus}
                      setNote={setNote}
                      setDate={setDate}
                      setTime={setTime}
                      StorageData={listData}
                      editing={editing}
                      seteditInfo={seteditInfo}
                    />
            })
        }
      </div>
      <button type="button" className="Clear-btn">Clear item</button>
    </div>
  )
}

export default List