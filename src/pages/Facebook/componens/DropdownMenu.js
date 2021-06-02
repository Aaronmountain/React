import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import DropdownItem from "../componens/DropdownItem.js";
import { ReactComponent as Cogicon } from "../../../images/cog.svg";
import { ReactComponent as Chevron } from "../../../images/chevron.svg";
import { ReactComponent as ArrowLeft } from "../../../images/arrowLeft.svg";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(e) {
    const height = e.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className='dropdown' style={{ minHeight: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='fade'
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            lefticon={<Cogicon />}
            righticon={<Chevron />}
            goToMenu='settings'
            setActiveMenu={setActiveMenu}
          >
            <span className='text'>Skill</span>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='fade-settings'
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem lefticon={<ArrowLeft />} goToMenu='main' setActiveMenu={setActiveMenu} />
          <DropdownItem>HTML</DropdownItem>
          <DropdownItem>CSS</DropdownItem>
          <DropdownItem>JavaScript</DropdownItem>
          <DropdownItem>TailwindCSS</DropdownItem>
          <DropdownItem>BootStrap</DropdownItem>
          <DropdownItem>React</DropdownItem>
          <DropdownItem>Redux</DropdownItem>
          <DropdownItem>Router</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu
