import React, { useState } from 'react';
import './stylesheets/Dropdown.css'
import { Button } from 'bootstrap-4-react';
import { BsX, BsList } from 'react-icons/bs';

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="dropdown">
      <Button onClick={() => setOpen(!open)}>
        { !open && <BsList className="nav-icon" />} { open && <BsX className="nav-icon"/>}
      </Button>
      <ul className="dropdown-nav">
        { open && props.children }
      </ul>
    </nav>
  )
}



export default Dropdown;
