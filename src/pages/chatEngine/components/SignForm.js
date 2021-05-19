import React, { useState } from 'react'
import LoginForm from './LoginForm.js'
import Register from './Register.js'

function SignForm({ isLogin, setIsLogin }) {

  const handleClick = (e) => {
    if (e.target.innerText === 'Login') setIsLogin(true)
    if (e.target.innerText === 'register') setIsLogin(false)
  }

  return (
    <div>
      <h1 className='title'>chat APPlication</h1>
      <div className="option">
        <a className='loginOrReg' onClick={handleClick} style={{ color: isLogin ? '#fff' : ' #000' }}>Login</a>
        <a className='loginOrReg' onClick={handleClick} style={{ color: !isLogin ? '#fff' : '#000' }}>register</a>
      </div>
      <div className='SignForm'>
        {isLogin ? <LoginForm /> : <Register />}
      </div>
    </div>
  )
}

export default SignForm
