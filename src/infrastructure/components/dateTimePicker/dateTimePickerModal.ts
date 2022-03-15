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
  registeredEvents?: unknown;
  value?: any | Date | number | string;
  onChange?: any;
  readOnly?: boolean;
  mask?: string;
  maxDate?: unknown;
  minDate?: unknown;
  open?: boolean;
  openTo?: 'day' | 'month' | 'year';
  orientation?: 'landscape' | 'portrait';
  views?: Array<'day' | 'month' | 'year'>;
  reduceAnimations?: boolean;
  defaultCalendarMonth?: unknown;
  control?: unknown;
  name?: string;
  onBlur?: unknown;
  allowSameDateSelection?: boolean;
  calendars?: 1 | 2 | 3;
  inputFormat?: string;
  startText?: React.ReactNode;
  endText?: React.ReactNode;
  dateValue?: unknown;
  timeOpenTo?: 'hours' | 'minutes' | 'seconds';
  timeViews?: Array<'hours' | 'minutes' | 'seconds'>;
};
