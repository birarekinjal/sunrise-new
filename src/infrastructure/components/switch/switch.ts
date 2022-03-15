export type CustomSwitchProps = {
  checked?: boolean;
  color?: 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  edge?: 'end' | 'start';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: any
};