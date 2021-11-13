import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { REREACT_APP_CHAT_ENGINE_PROJECT_ID, REACT_APP_CHAT_ENGINE_URI } = process.env;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'project-ID': REREACT_APP_CHAT_ENGINE_PROJECT_ID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get(REACT_APP_CHAT_ENGINE_URI, { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (err) {
      setErrorMsg('will,It`s incorrent. Please try agin');
    }
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required
          />
          <input
            className='input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            required
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chating</span>
            </button>
            <h2 className='error'>{errorMsg}</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
