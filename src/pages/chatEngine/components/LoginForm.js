import React, { useState } from 'react'
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const url = 'https://api.chatengine.io/chats'
  const projectID = 'bd28dafa-2bce-4351-9e15-b5d02a2a44bb'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = { 'project-ID': projectID, 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get(url, { headers: authObject })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (err) {
      setErrorMsg('will,It`s incorrent. Please try agin')
    }
  }

  return (
    <div className='wrapper'>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required />
          <input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' required />
          <div align="center">
            <button type="submit" className='button'>
              <span>Start Chating</span>
            </button>
            <h2 className='error'>{errorMsg}</h2>
          </div>
        </form>
      </div>
    </div >
  )
}

export default LoginForm
