import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RadioButtonProps } from './radioModal';

const CustomRadioButton: React.FC<RadioButtonProps> = ({
  data,
  label,
  name,
  register,
  defaultValue,
  error,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>{label}</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue={defaultValue || ''}
          name='radio-buttons-group'>
          {data &&
            data.length > 0 &&
            data.map((v: any, key: any) => (
              <FormControlLabel
                key={key}
                value={v.value}
                control={<Radio />}
                label={v.label}
                name={name}
                {...(register(name) || {})}
              />
            ))}
        </RadioGroup>
        {error && (
          <>
            <span>{error}</span>
          </>
        )}
      </FormControl>
    </>
  );
};

export default CustomRadioButton;