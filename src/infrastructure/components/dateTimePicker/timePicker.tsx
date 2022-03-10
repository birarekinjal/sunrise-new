import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { DateTimePickerProps } from './dateTimePickerModal';
import './datePickerUI.scss';

const CustomTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  className,
  disabled,
  clearable,
  clearText,
  desktopModeMediaQuery,
  mask,
  open,
  value,
  onChange,
  orientation,
  timeOpenTo,
  readOnly,
  timeViews,
}) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <TimePicker
        label={label}
        className={className}
        orientation={orientation}
        openTo={timeOpenTo}
        readOnly={readOnly}
        disabled={disabled}
        clearText={clearText}
        clearable={clearable}
        desktopModeMediaQuery={desktopModeMediaQuery}
        mask={mask}
        open={open}
        value={value}
        onChange={onChange}
        views={timeViews}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
