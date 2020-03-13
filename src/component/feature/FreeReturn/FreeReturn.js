import React from 'react';
import Logo from "../../../assets/ic_rotate_left_24px.png"
import './FreeReturn.css'

const FreeReturn = () => {
    return(
        <div className="feature-free-return d-flex">
            <div className="iconFreeReturn mr-4">
                <img src={Logo}></img>
            </div>
            <div className="fontFreeReturn">
                <h5><strong>Free Return</strong></h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer mollis blandit convallis. Nulla mattis blandit mi vitae mattis. 
                    Nunc sed
                </p>
            </div>
        </div>
    )
}

export default FreeReturn;