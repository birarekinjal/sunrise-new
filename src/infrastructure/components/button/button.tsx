import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from './buttonModal';
import { Loader } from '..';
import './button.scss';

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type,
  disabled,
  variant,
  size,
  isLoading,
  startIcon,
  endIcon,
  color,
  withStartSvg,
  withEndSvg,
  className,
  sx,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || 'contained'}
      color={color}
      className={className}
      size={size}
      type={type}
      startIcon={withStartSvg || startIcon}
      endIcon={withEndSvg || endIcon}
      sx={sx}
      disabled={disabled}>
      {isLoading && <Loader />}
      {label}
    </Button>
  );
};

export default CustomButton;
