import React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker  from '@mui/lab/DateRangePicker';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { DateTimePickerProps } from './dateTimePickerModal';
import './datePickerUI.scss';

const CustomDateRangePicker: React.FC<DateTimePickerProps> = ({
  label,
  className,
  disabled,
  clearable,
  clearText,
  allowSameDateSelection,
  calendars,
  defaultCalendarMonth,
  desktopModeMediaQuery,
  inputFormat,
  loading,
  mask,
  maxDate,
  minDate,
  open,
  orientation,
  readOnly,
  startText,
  endText,
  value,
  ref,
  onChange,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
            <DateRangePicker
              startText={startText}
              endText={endText}
              value={value}
              ref={ref}
              label={label}
              className={className}
              onChange={onChange}
              disabled={disabled}
              clearable={clearable}
              clearText={clearText}
              allowSameDateSelection={allowSameDateSelection}
              defaultCalendarMonth={defaultCalendarMonth}
              desktopModeMediaQuery={desktopModeMediaQuery}
              inputFormat={inputFormat}
              loading={loading}
              calendars={calendars}
              mask={mask}
              maxDate={maxDate}
              minDate={minDate}
              open={open}
              orientation={orientation}
              readOnly={readOnly}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
      </LocalizationProvider>
    </>
  );
};

export default CustomDateRangePicker;
