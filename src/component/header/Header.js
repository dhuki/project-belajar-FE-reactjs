import React from 'react';
import Titlebar from "./Titlebar/Title";
import Searchbar from "./Searchbar/Searchbar";
import Listbar from "./Listbar/Listbar"
import Menubar from "./Menubar/Menubar"
import "./Header.css";

const Header = (props) => {
    return(
        <div className="header"> 
            <div className="container pt-4">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1">
                            <Searchbar>
                            </Searchbar>
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2 d-flex justify-content-center">
                            <Titlebar>
                            </Titlebar>
                        </div>
                        <div className="col-6 col-md-4 order-3 order-md-3 d-flex justify-content-end">
                            <Listbar>
                            </Listbar>
                        </div>
                    </div>
            </div>
            <hr></hr>
            <div className="container">
                <div className="header-bottom">
                    <Menubar mark={props.mark}></Menubar>
                </div>
            </div>
        </div>
    )
}

export default Header;