export type FullScreenLoaderProps = {
  open?: boolean;
  invisible?: boolean;
  transitionDuration?:
  | number
  | { appear?: number; enter?: number; exit?: number };
  color?:
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  label?: string;
};