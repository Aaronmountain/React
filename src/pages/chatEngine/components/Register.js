import React from 'react'

function Register() {
  return (
    <div className='wrapper'>
      <div className="form">
        <form>
          <input className='input' type="text" placeholder='Username' required />
          <input className='input' type="password" placeholder='password' required />
          <div align="center">
            <button type="submit" className='button'>
              <span>register</span>
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Register
