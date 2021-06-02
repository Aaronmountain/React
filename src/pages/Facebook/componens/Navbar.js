import React from 'react'

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-ul'>
        {props.children}
      </ul>
    </nav>
  )
}

export default Navbar
