import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container'>
      <h1>Error Page</h1>
      <Link to='/' className='btn'>Home Page</Link>
    </div>
  )
}

export default Error
