import React, { useState, useEffect } from 'react';
import "./Menubar.css"
import ButtonMenu from "../../button/ButtonMenu"

const Menubar = (props) => {

    const count = props.mark

    return (
        <div className="menu-bar">
            <ul className="list-inline text-center">
                <li className={count == 1 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Home"></ButtonMenu></li>
                <li className={count == 2 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Catalogue"></ButtonMenu></li>
                <li className={count == 3 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Contact"></ButtonMenu></li>
            </ul>
        </div>
    )
}

export default Menubar;