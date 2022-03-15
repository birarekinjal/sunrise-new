export type CheckboxProps = {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?:
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  inputProps?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  size?: 'medium' | 'small';
  value?: any;
  label?: any;
  registeredEvents?: any;
  isControlled?: boolean;
};
