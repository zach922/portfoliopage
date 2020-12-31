import React from 'react';
import './stylesheets/DropdownItem.css'

function DropdownItem(props) {  
    return (
        <li className="nav-item">
            <a href={props.route} alt="#">
                {props.icon}
            </a>
        </li>
    )
}

export default DropdownItem;