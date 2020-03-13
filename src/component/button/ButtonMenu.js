import React from 'react';
import "./ButtonMenu.css"

const ButtonMenu = (props) => {
    return (
        <button style={{border: "none", background: "none"}} className="btn-menu">{props.name}</button>
    )
}

export default ButtonMenu;