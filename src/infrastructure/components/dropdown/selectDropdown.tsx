import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectDropdownProps } from './dropdownModal';

const SelectDropdown = ({
  options,
  multiple,
  label,
  value,
  onChange,
}: SelectDropdownProps) => {
  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple={multiple}
            value={value}
            onChange={onChange}
            input={<OutlinedInput label="Name" />}
          // MenuProps={MenuProps}
          >
            {options && options.length > 0 && options.map((data: any) => (
              <MenuItem
                key={data.name}
                value={data.value}
              >
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectDropdown;