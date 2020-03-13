import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Dropdown from './dropdown/Dropdown';

const SpecificationOrder = (props) => {

    return(
        <div className="form-control-order mt-3">
            <h5><strong>Order Specification</strong></h5>
            <Dropdown title="Size" subtitle="Choose your size" items={["S", "M", "L"]}></Dropdown>
            <Dropdown title="Color" subtitle="Choose your color" items={["Red", "Blue"]}></Dropdown>
        </div>
    )
}

export default SpecificationOrder;