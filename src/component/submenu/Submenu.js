import React, {useState} from 'react';
import './Submenu.css'
import ButtonMenu from "../button/ButtonMenu"

const Submenu = () => {

    const [count, setCount] = useState(1)

    return(
        <div className="submenu container">
            <ul className="list-inline text-center" style={{position: "relative"}}>
                <li onClick={() => setCount(1)} className={count === 1 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Featured"></ButtonMenu></li>
                <li onClick={() => setCount(2)} className={count === 2 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="New Arrival"></ButtonMenu></li>
                <li onClick={() => setCount(3)} className={count === 3 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Best Sellers"></ButtonMenu></li>
                <li onClick={() => setCount(4)} className={count === 4 ? "list-inline-item active" : "list-inline-item" }><ButtonMenu name="Sale"></ButtonMenu></li>
            </ul>
        </div>
    )
}

export default Submenu;