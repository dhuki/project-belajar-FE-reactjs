import React from 'react';
import Navigation from './navigation/Navigation'
import Greeting from './greeting/Greeting'
import ContactInfo from './contactInfo/ContactInfo'
import './Footer.css'


const Footer = () => {
    return(
        <div className="footer container">
            <div className="row">
                <div className="col-7">
                    <Navigation></Navigation>
                </div>
                <div className="col-5">
                    <ContactInfo></ContactInfo>
                </div>
            </div>
            <div className="footer-greeting mt-5">
                <Greeting></Greeting>
            </div>
        </div>
    )
}

export default Footer;