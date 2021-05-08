import React from 'react'
import { Link } from 'react-router-dom'

/*
  1. 用 <Link to='...' /> 標籤，來取代 HTML中的a標籤 <a href='...'></a>
  2. to屬性所指向的路徑，代表 Route 所設定的 path ，則可以前往那個 component 頁面
*/



function Navbar() {
  return (
    <nav >
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
