import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { CustomInputProps } from './inputModal';
import './input.scss';

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  id,
  onChange,
  autoComplete,
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
}) => {
  return (
    <FormControl variant='standard'>
      {isControlled ? (
        <TextField
          id={id}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={disabled}
          color={color}
          type={type}
          value={value}
          variant={variant}
          name={name}
          required={required}
          rows={rows}
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
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={disabled}
          color={color}
          type={type}
          value={value}
          variant={variant}
          name={name}
          required={required}
          InputProps={inputProps}
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiLine}
          error={error}
          helperText={helperText}
        />
      )}
      {showError && error && (
        <>
          <span>{error}</span>
        </>
      )}
    </FormControl>
  );
};

export default CustomInput;
