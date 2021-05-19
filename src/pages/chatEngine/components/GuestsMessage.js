import React from 'react'

const GuestsMessage = ({ lastMessage, message }) => {
  // 判斷訊息是不是最新的，如果是，印出大頭貼
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

  return (
    <div className='message-row'>
      {
        isFirstMessageByUser && (
          <div
            className='message-avatar'
            style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
          />
        )
      }
      {
        message?.attachments?.length > 0 ? (
          <img
            className='message-image'
            src={message.attachments[0].file}
            alt='message-attachment'
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        ) : (
          <div
            className='message'
            style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          >
            {message.text}
          </div>
        )
      }
    </div>
  )
}

export default GuestsMessage
