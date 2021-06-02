import React from 'react'

function DropdownItem(props) {
  const { setActiveMenu, goToMenu } = props
  return (
    <a href='#' className='menu-item' onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      <span className='icon-button'>{props.lefticon}</span>
      {props.children}
      <span className='icon-right'>{props.righticon}</span>
    </a>
  )
}

export default DropdownItem

