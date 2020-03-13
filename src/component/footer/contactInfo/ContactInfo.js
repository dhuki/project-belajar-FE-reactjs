import React from 'react';
import { Location, Mobile, Mail } from 'react-bytesize-icons';
import IconFacebook from '../../../assets/Icon-Facebook.png';
import IconWhatsapp from '../../../assets/Icon-Whatsapp.png';
import IconTokopedia from '../../../assets/Icon-Tokopedia.png';
import "./ContactInfo.css"

const ContactInfo = () => {
    return(
        <div className="ContactInfo">
            <div className="ContactInfo-Header">
                <p><strong>Social Media</strong></p>
            </div>
            <div className="ContactInfo-Content">
                <div className="Location">
                    <img src={IconFacebook} style={{width: 30, height: 30}} atl="icon-facebook"></img>
                    <div><p>https://www.facebook.com/herey</p></div>
                </div>
                <div className="Location">
                    <img src={IconTokopedia} style={{width: 30, height: 30}} atl="icon-tokopedia"></img>
                    <div><p>Herey Shopping</p></div>   
                </div>
                <div className="Location">
                    <img src={IconWhatsapp} style={{width: 30, height: 30}} atl="icon-whatsapp"></img>
                    <div><p>080989999</p></div>
                </div>
            </div>

        </div>
    )
}

export default ContactInfo;