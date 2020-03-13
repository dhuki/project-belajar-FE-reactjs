import React from 'react';
import "./Item.css"
import { Link } from 'react-router-dom';
import Logo from "../../../assets/ic_loyalty_24px.png"

const Item = (props) => {
    return(
        <Link to= {`/detail/${props.cardFile.id}`} style={{textDecoration:"none"}}>
            <div className="card">
                <img src={require ("../../../assets/cloth_1.jpg")} className="card-img-top" alt="card-img-top" />
                <div className="card-body pt-1">
                    <img src={Logo} style={{display: "inline", marginRight: 9}}></img>
                    <p style={{fontSize:15, display: "inline"}}>Rp 250.000</p>
                    <h5 className="card-title">{props.cardFile.cardTitle}</h5>
                    <p className="card-text">{props.cardFile.cardText}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;