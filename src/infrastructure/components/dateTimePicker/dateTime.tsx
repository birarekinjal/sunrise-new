import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { DateTimePickerProps } from './dateTimePickerModal';
import './datePickerUI.scss';

const CustomDateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  className,
  disabled,
  clearable,
  clearText,
  desktopModeMediaQuery,
  mask,
  open,
  openTo,
  orientation,
  readOnly,
  views,
  value,
  ref,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        className={className}
        ref={ref}
        value={value}
        onChange={onChange}
        disabled={disabled}
        clearText={clearText}
        clearable={clearable}
        desktopModeMediaQuery={desktopModeMediaQuery}
        mask={mask}
        open={open}
        openTo={openTo}
        orientation={orientation}
        readOnly={readOnly}
        views={views}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
