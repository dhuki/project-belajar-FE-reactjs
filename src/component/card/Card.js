import React from 'react';
import Items from './item/Item'
import './Card.css'

const Card = (props) => {

    const data = props.cardFile.map((cardFileItem) => 
        <Items cardFile = {cardFileItem}></Items>
    );

    return(
        <div className="container-fluid">
            <div className="card-deck card-deck-custom justify-content-center">
                {data}
            </div>
        </div>
    )
}

export default Card;