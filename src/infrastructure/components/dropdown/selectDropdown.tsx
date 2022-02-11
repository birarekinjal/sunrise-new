import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import { SelectDropdownProps } from './dropdownModal';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '../index';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const CustomDropdown:React.FC<SelectDropdownProps> = ({
  names,
  label,
  // isCheckbox,
  isMultiple,
}) => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event:any) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleRemove = () => {
    setPersonName([]);
  };

  const handleSetAll = () => {
    setPersonName(names);
  };

  return (
    <div>
         {
           isMultiple && 
           (
            <Button type="button" onClick={handleSetAll} label='Select All' />
           )
         }
        <Fab color="primary" onClick={handleRemove}>
          <ClearIcon />
        </Fab>
      <FormControl sx={{ m: 1, width: 300 }}>
     
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={isMultiple}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map(( name: any ) => (
            <MenuItem key={name} value={name}>
              {/* {
                isCheckbox && 
                (
                <Checkbox checked={personName.indexOf(name) > -1} />
                )
              } */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomDropdown; 