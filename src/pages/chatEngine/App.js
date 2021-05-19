import React, { useState } from 'react'
import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed.js'

import './App.css'
import SignForm from './components/SignForm.js';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  if (!localStorage.getItem('username')) return <SignForm isLogin={isLogin} setIsLogin={setIsLogin} />

  return (
    <ChatEngine
      height="100vh"
      projectID="bd28dafa-2bce-4351-9e15-b5d02a2a44bb"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />

  )
}

export default App
