import React, { useState } from 'react'

function Navitem(props) {
  const [open, setOpen] = useState(false)
  return (
    <li className='nav-item'>
      <a href="#" className='icon-btn' onClick={() => setOpen(!open)}>
        {props.icons}
      </a>
      {open && props.children}
    </li>
  )
}

export default Navitem
