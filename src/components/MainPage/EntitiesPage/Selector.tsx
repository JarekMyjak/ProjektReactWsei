import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import React from 'react'
interface props {
    startingValue: string;
    options: string[];
}
const Selector = ({ startingValue, options }:props) => {

    const [Value, setValue] = React.useState(startingValue);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Value}
            onChange={handleChange}
        >
            {options.map((o: string) => <MenuItem value={o}>{o}</MenuItem>)}
        </Select>
    )
}

export default Selector
