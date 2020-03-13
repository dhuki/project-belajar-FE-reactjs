import React from 'react';
import { Send } from 'react-bytesize-icons';
import Logo from "../../../assets/ic_local_shipping_24px.png"
import "./FreeShipping.css"

const FreeShipping = () => {
    return(
        <div className='feature-free-shipping d-flex'>
            <div className="iconFreeShipping mr-4">
                <img src={Logo}></img>
            </div>
            <div className="fontFreeShipping">
                <h5><strong>Free Shipping</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer mollis blandit convallis. Nulla mattis blandit mi vitae mattis. 
                Nunc sed
                </p>
            </div>
        </div>
    )
}

export default FreeShipping;