import React from 'react';
import WordingTitleBarang from './wordingTitleBarang/WordingTitleBarang'
import WordingDetailBarang from './wordingDetailBarang/WordingDetailBarang'
import SpecificationOrder from './specificationOrder/SpecificationOrder';
import ButtonBase from '../button/ButtonBase';

const SpecificationBarang = () => {

    const windowHeight = window.innerHeight

    console.log(windowHeight)

    return(
        <div className="specification-barang">
            <WordingTitleBarang></WordingTitleBarang>
            <WordingDetailBarang></WordingDetailBarang>
            <SpecificationOrder></SpecificationOrder>
            <div className="d-flex justify-content-end mt-3 mb-5">
                <ButtonBase name="Add to Chart"></ButtonBase>
            </div>
        </div>
    )
}

export default SpecificationBarang