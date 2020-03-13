import React, { useEffect } from 'react';
import Header from "../../component/header/Header"
import SpecificationBarang from "../../component/specificationBarang/SpecificationBarang"
import SpecificationOrder from '../../component/specificationBarang/specificationOrder/SpecificationOrder';
import DetailImageBarang from '../../component/detailImageBarang/DetailImageBarang';
import "./DetailBarang.css"

const DetailBarang = (props) => {

    return(
        <div className="detail-barang">
            <Header></Header>
            <div className="content container">
                <div className="row">
                    <div className="col-12 col-xl-6 main-img">
                        <DetailImageBarang></DetailImageBarang>
                    </div>
                    <div className="col-12 col-xl-6">
                        <SpecificationBarang></SpecificationBarang>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBarang;