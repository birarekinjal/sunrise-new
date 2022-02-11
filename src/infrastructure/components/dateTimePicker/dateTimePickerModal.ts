//  common types for all component

export type DateTimePickerProps = {
  // Date picker
  label?: string;
  className?: string;
  clearable?: boolean;
  clearText?: React.ReactNode;
  disabled?: boolean;
  desktopModeMediaQuery?: string;
  loading?: boolean;
  registeredEvents?: any;
  value?: any | Date | number | string;
  onChange?: any;
  readOnly?: boolean;
  mask?: string;
  maxDate?: any;
  minDate?: any;
  open?: boolean;
  openTo?: 'day' | 'month' | 'year';
  orientation?: 'landscape' | 'portrait';
  views?: Array<'day' | 'month' | 'year'>;
  reduceAnimations?: boolean;
  defaultCalendarMonth?: any;
  control?: any;
  name?: any;
  onBlur?: any;
  ref?: any;

  // date Range picker

  allowSameDateSelection?: boolean;
  calendars?: 1 | 2 | 3;
  inputFormat?: string;
  startText?: React.ReactNode;
  endText?: React.ReactNode;
  dateValue?: any;

  // time picker
  timeOpenTo?: 'hours' | 'minutes' | 'seconds';
  timeViews?: Array<'hours' | 'minutes' | 'seconds'>;
};
