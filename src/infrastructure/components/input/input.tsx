import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { CustomInputProps } from './inputModal';
import './input.scss';
import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  id,
  onChange,
  autoFocus,
  color,
  defaultValue,
  disabled,
  type,
  value,
  variant,
  name,
  required,
  inputProps,
  isControlled,
  registeredEvents,
  multiLine,
  rows,
  maxRows,
  minRows,
  helperText,
  error,
  showError,
  isPassword,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const showPassword = () => {
    if (isPassword) {
      return (
        <IconButton
          aria-label="toggle password visibility"
          onClick={managePasswordVisibility}
          edge="end"
        >
          {hidePassword ? <VisibilityOff /> : <Visibility /> }
        </IconButton>
      );
    }
    return null;
  };

  return (
    <FormControl variant='standard'>
      <div className='mb-2 password-field'>
        {/* <div className='mb-2'>   Conditionally class show "password-field" when input type password  */}
        {isControlled ? (
          <TextField
            id={id}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            color={color}
            type={isPassword && !hidePassword ? 'text' : type}
            value={value}
            variant={variant}
            name={name}
            required={required}
            rows={rows}
            autoComplete='off'
            maxRows={maxRows}
            minRows={minRows}
            multiline={multiLine}
            InputProps={inputProps}
            helperText={helperText}
          />
        ) : (
          <TextField
            {...(registeredEvents || {})}
            id={id}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            color={color}
            value={value}
            variant={variant}
            name={name}
            type={isPassword && !hidePassword ? 'text' : type}
            required={required}
            InputProps={inputProps}
            rows={rows}
            maxRows={maxRows}
            minRows={minRows}
            multiline={multiLine}
            error={error}
            helperText={helperText}
            autoComplete='off'
          />
        )}
        {isPassword && (
          <div className="showIcon">{showPassword()}</div>
        )}
      </div>
      {showError && error && (
        <>
          <span>{error}</span>
        </>
      )}
    </FormControl>
  );
};

export default CustomInput;
