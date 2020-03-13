import React from 'react';
import { Search } from 'react-bytesize-icons';
import './Searchbar.css'

const Searchbar = () => {
    return(
        <div className="search-bar d-inline">
            <Search width={13} height={13}></Search>
            <from>
                <input className="searchbar" type="text" name="search" placeholder="Search"></input>
            </from>
        </div>
    )
}

export default Searchbar;