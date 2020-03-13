import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const Dropdown = (props) => {

    const items = props.items.map((item) =>
        <MenuItem value={item}>{item}</MenuItem>
    )

    const useStyles = makeStyles(theme => ({
        formControlCustom : {
            width: "100%"
        }
    }));

    const classesStyle = useStyles();

    return(
        <div className="mt-3">
            {/* <div className="align-self-center"><em>{props.title} : </em></div> */}
            <FormControl className={classesStyle.formControlCustom}>
                <InputLabel id="demo-controlled-open-select-label"><em>{props.subtitle}</em></InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown;