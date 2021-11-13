import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.js';
import SignForm from './components/SignForm.js';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { REREACT_APP_CHAT_ENGINE_PROJECT_ID } = process.env;
  if (!localStorage.getItem('username'))
    return <SignForm isLogin={isLogin} setIsLogin={setIsLogin} />;

  return (
    <ChatEngine
      height='100vh'
      projectID={REREACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
