import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { DateTimePickerProps } from './dateTimePickerModal';
import './datePickerUI.scss';

const CustomDatePicker: React.FC<DateTimePickerProps> = ({
  className,
  clearable,
  clearText,
  defaultCalendarMonth,
  desktopModeMediaQuery,
  disabled,
  mask,
  maxDate,
  minDate,
  open,
  openTo,
  orientation,
  reduceAnimations,
  label,
  views,
  value,
  ref,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label={label}
        value={value}
        views={views}
        className={className}
        disabled={disabled}
        clearText={clearText}
        clearable={clearable}
        defaultCalendarMonth={defaultCalendarMonth}
        desktopModeMediaQuery={desktopModeMediaQuery}
        mask={mask}
        maxDate={maxDate}
        minDate={minDate}
        open={open}
        openTo={openTo}
        orientation={orientation}
        reduceAnimations={reduceAnimations}
        onChange={onChange}
        ref={ref}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
