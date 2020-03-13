import React from 'react';
import Logo from "../../../assets/ic_info_outline_24px@2x.png"
import './CustomerHelp.css'

const CustomerHelp = () => {
    return(
        <div className="feature-customer-help d-flex">
            <div className="iconCustomerHelp mr-4">
                <img src={Logo}></img>
            </div>
            <div className="fontCustomerHelp">
                <h5><strong>Customer Help</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer mollis blandit convallis. Nulla mattis blandit mi vitae mattis. 
                    Nunc sed
                </p>
            </div>
        </div>
    )
}

export default CustomerHelp;