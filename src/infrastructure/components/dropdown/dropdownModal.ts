export type SelectDropdownProps = {
  label?: string;
  isCheckbox?: boolean;
  isMultiple?: boolean;
  value?: any;
  onChange?: () => void;
  children?: React.ReactNode;
  renderValue?: () => React.ReactNode;
  options?: object[];
  multiple?: boolean;
  error?: string;
  showError?: boolean;
};