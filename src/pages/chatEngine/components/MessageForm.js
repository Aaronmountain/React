import React, { useState } from 'react'
import { sendMessage } from 'react-chat-engine'

function MessageForm(props) {
  const [message, setMessage] = useState('');
  const { chatID, creds } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = message.trim()

    if (text.length > 0) sendMessage(creds, chatID, { text })
    setMessage('')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatID, { files: e.target.files, text: '' })
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='message-input'
        placeholder='send messages'
        value={message}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span style={{ fontSize: '.6rem' }}>
          上傳
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type='submit' className='send-button'>
        送出
      </button>
    </form>
  )
}

export default MessageForm
