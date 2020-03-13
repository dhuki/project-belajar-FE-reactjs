import React from 'react';
import './WordingTitleBarang.css'
import Logo from "../../../assets/ic_loyalty_24px.png"

const WordingTitleBarang = () => {
    return(
        <div className="title-barang'">
            <p className="type">SHIRTS</p>
            <h3><strong>Earth Grid Hoodie</strong></h3>
            <p className="price"> <img src={Logo} alt="price-stuff"></img> Rp 250.000</p>
        </div>
    )
}

export default WordingTitleBarang;