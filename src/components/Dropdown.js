import React, { useState } from 'react';
import './stylesheets/Dropdown.css'
import { Button } from 'bootstrap-4-react';
import { BsX, BsList } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="dropdown">
      <Button className="nav-btn" onClick={() => setOpen(!open)}>
        { !open && <BsList className="nav-icon" />} { open && <BsX className="nav-icon"/>}
      </Button>
      <CSSTransition
          in ={open}
          timeout={200}
          unmountOnExit
          classNames="slide-open"
          >
        <div>
          <ul className="dropdown-nav">
            { props.children }
          </ul>
        </div>
      </CSSTransition>
    </nav>
  )
}



export default Dropdown;
