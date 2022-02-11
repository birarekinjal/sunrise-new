export type CustomLoaderProps = {
  classes?: object;
  disableShrink?: boolean;
  size?: number | string;
  sx?: Array<Function | object | boolean> | Function | object;
  thickness?: number;
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  color?:
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
};
