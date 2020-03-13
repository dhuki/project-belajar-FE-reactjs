import React from 'react';
import './Title.css';

const TitleBar = () => {
    return (
        <div className="title-bar">
            <img src={require ("../../../assets/vespa.jpg")} alt="image1" height="120" width="135" />
        </div>
    )
}

export default TitleBar;