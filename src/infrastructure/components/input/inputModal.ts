export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: any;
  disabled?: boolean;
  type?: string;
  value?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  name?: string;
  required?: boolean;
  inputProps?: object;
  isControlled?: boolean;
  registeredEvents?: any;
  multiLine?: boolean;
  rows?: number | string;
  maxRows?: number | string;
  minRows?: number | string;
  error?: any;
  showError?: boolean;
  helperText?: React.ReactNode;
  isPassword?:boolean;
};