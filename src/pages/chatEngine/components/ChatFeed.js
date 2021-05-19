import React from 'react'
import MasterMessage from './MasterMessage.js'
import GuestsMessage from './GuestsMessage.js'
import MessageForm from './MessageForm.js'

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]

  // 判斷是否已讀，印出照片
  const renderReceipts = (message, isMasterMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={`${index}`}
        className='read-receipt'
        style={{
          float: isMasterMessage ? 'right' : 'left',
          backgroundImage: `url(${person?.person?.avatar})`
        }}
      />
    ))
  }

  const renderMessages = () => {
    const keys = Object.keys(messages)

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMasterMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {
              isMasterMessage ? (
                <MasterMessage message={message} />
              ) : (
                <GuestsMessage message={message} lastMessage={messages[lastMessageKey]} />
              )
            }
          </div>
          <div
            className='read-receipts'
            style={{ marginRight: isMasterMessage ? '18px' : '0px', marginLeft: isMasterMessage ? '0px' : '68px' }}
          >
            {renderReceipts(message, isMasterMessage)}
          </div>
        </div>

      )
    })
  }

  if (!chat) return 'Loading...';

  return (
    <div className='chat-feed'>
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
        </div>
        <div className="chat-subtitle">
          {chat.people.map(person => `${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}

      <div style={{ height: '100px' }} />

      <div className="message-form-container">
        <MessageForm {...props} chatID={activeChat} />
      </div>
    </div >
  )
}

export default ChatFeed
