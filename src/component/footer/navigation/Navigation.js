import React from 'react';
import './Navigation.css';
import '../../button/ButtonMenu'
import ButtonMenu from '../../button/ButtonMenu';

const Navigation = () => {
    return(
        <div className="row">
            <div className="col-md-12 navigation">
                <div className="navigation-header">
                    <p><strong>Need Help?</strong></p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li className="different"><ButtonMenu name="Stores"></ButtonMenu></li>
                            <li><ButtonMenu name="Event"></ButtonMenu></li>
                            <li><ButtonMenu name="Join With Us"></ButtonMenu></li>
                            <li><ButtonMenu name="FAQs"></ButtonMenu></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li className="different"><ButtonMenu name="Our Teams"></ButtonMenu></li>
                            <li><ButtonMenu name="Our Supporters"></ButtonMenu></li>
                            <li><ButtonMenu name="Forum Discussion"></ButtonMenu></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li className="different"><ButtonMenu name="Term & Conditions"></ButtonMenu></li>
                            <li><ButtonMenu name="Comming Soon?"></ButtonMenu></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;