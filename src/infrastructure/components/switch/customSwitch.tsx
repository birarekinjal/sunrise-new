/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Switch from '@mui/material/Switch';
import { CustomSwitchProps } from './switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  checked,
  color,
  defaultChecked,
  disabled,
  edge,
  onChange,
  required,
  value,
}) => (
  <>
    <Switch
      {...label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      edge={edge}
      onChange={onChange}
      required={required}
      value={value}
      color={color}
      checked={checked}
    />
  </>
);

export default CustomSwitch;
