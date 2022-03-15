import React from 'react';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxProps } from './checkboxModal';
import './checkbox.scss';

const CustomCheckBox: React.FC<CheckboxProps> = ({
  size,
  color,
  checked,
  disabled,
  defaultChecked,
  id,
  required,
  value,
  onChange,
  label,
  isControlled,
  registeredEvents,
  ref,
}) => {
  return (
    <>
      <FormGroup>
        {isControlled ? (
          <FormControlLabel
            control={
              <Checkbox
                size={size}
                color={color}
                checked={checked}
                disabled={disabled}
                defaultChecked={defaultChecked}
                id={id}
                required={required}
                value={value}
                onChange={onChange}
              />
            }
            label={label}
          />
        ) : (
          <FormControlLabel
            control={
              <Checkbox
                ref={ref}
                {...(registeredEvents || {})}
                size={size}
                color={color}
                checked={checked}
                disabled={disabled}
                defaultChecked={defaultChecked}
                id={id}
                required={required}
                value={value}
                onChange={onChange}
              />
            }
            label={label}
          />
        )}
      </FormGroup>
    </>
  );
};

export default CustomCheckBox;
