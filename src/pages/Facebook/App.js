import React from 'react'

import Navbar from "./componens/Navbar.js";
import Navitem from "./componens/Navitem.js";
import DropdownMenu from "./componens/DropdownMenu.js";
import { ReactComponent as BellIcon } from "../../images/bell.svg";
import { ReactComponent as MessageIcon } from "../../images/message.svg";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as CaretIcon } from "../../images/caret.svg";
import "./App.css";

function App() {
  return (
    <>
      <Navbar>
        <Navitem icons={<PlusIcon />} />
        <Navitem icons={<BellIcon />} />
        <Navitem icons={<MessageIcon />} />
        <Navitem icons={<CaretIcon />}>
          <DropdownMenu />
        </Navitem>
      </Navbar>
    </>
  )
}

export default App
