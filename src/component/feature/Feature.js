import React from 'react';
import FreeShipping from './FreeShipping/FreeShipping';
import FreeReturn from './FreeReturn/FreeReturn';
import CustomerHelp from './CustomerHelp/CustomerHelp';

const Feature = () => {
    return(
        <div className="feature">
            <div className="container mt-5">
                <div className="row">
                    <div className='col-sm-6 col-md-4'>
                        <FreeShipping></FreeShipping>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <FreeReturn></FreeReturn>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <CustomerHelp></CustomerHelp>
                    </div>
                </div>
            </div>
            <hr className="mt-4"></hr>
        </div>
    )
}

export default Feature;