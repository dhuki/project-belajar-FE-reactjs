import React from 'react';
import { Heart } from 'react-bytesize-icons';
import './Greeting.css'

const Greeting = () => {
    return(
        <div className="Greeting">
            <p> Copyright ©2020 All rights reserved | This webshit is made with <Heart width={17} height={17} color='#474747'></Heart> </p>
        </div>
    )
}

export default Greeting;