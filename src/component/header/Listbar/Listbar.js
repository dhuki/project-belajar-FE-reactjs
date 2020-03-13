import React from 'react';
import { User, Heart, Cart } from 'react-bytesize-icons';
import './Listbar.css';

const Listbar = () => {
    return(
        <div className="list-bar">
            <User width={17} height={17} color='#757575' className='contextListBar'></User>
            <Heart width={17} height={17} color='#757575' className='contextListBar'></Heart>
            <Cart width={17} height={17} color='#757575'></Cart>
        </div>
    )
}

export default Listbar;