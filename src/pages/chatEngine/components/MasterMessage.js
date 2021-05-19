import React from 'react'

const MasterMessage = ({ message }) => {
  // 訊息是圖片 return 圖片
  if (message?.attachments?.length > 0) {
    return (
      <img
        className='message-image'
        src={message.attachments[0].file}
        alt='message-attachment'
        style={{ float: 'right' }}
      />
    )
  }

  // 訊息不是圖片所以 return 訊息
  return (
    <div
      className='message'
      style={{ float: 'right', marginRight: '18px', color: 'fff', backgroundColor: '#3B2A50' }}
    >
      {message.text}
    </div>
  )
}

export default MasterMessage
