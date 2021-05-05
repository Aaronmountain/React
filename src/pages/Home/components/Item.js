import React from 'react'

const Item = (props) => {
  const { id, note, date, time, deleteData, submmitStatus, 
    setNote, setDate, setTime, StorageData, editing, seteditInfo
  } = props;

  function delData()
  {
    submmitStatus.current = true
    deleteData( (prev) =>
    {
      return prev.filter(item => item.id !== id) // filter判斷，id如果 "不等於就給過"
    })
  }

  function editData(){
    const item = StorageData.filter(data => data.id === id )
    setNote(item[0].note)
    setDate(item[0].date)
    setTime(item[0].time)
    seteditInfo(item[0])
    editing.current = true
  }
  
  return (
    <div className="list-items">
      <div className="text">
        <p className="title">{`${note}`}</p>
        <p style={{boxSizing:'border-box', paddingTop:'25px'}}>{`${date},${time}`}</p>
      </div>
      <div className="item-btn-container">
        <button 
          type="button" 
          className="edit-btn"
          onClick={editData}
        >
          <i className="far fa-edit"></i>
        </button>
        <button 
          type="button" 
          className="delete-btn" 
          onClick={delData}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Item