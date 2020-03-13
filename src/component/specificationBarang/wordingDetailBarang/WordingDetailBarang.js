import React from 'react';
import './WordingDetailBarang.css'
import { string } from 'prop-types';

const WordingDetailBarang = () => {
    return(
        <div className="description-barang">
            <h5><strong>Description Product</strong></h5>
            <p>Material : Cotton</p>
            <p>Type : Oversized</p>
            <p>Color : Black</p>
            <p>Size : S-M-L-XL</p>
        </div>
    )
}

export default WordingDetailBarang