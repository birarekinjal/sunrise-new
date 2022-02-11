import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from 'react-hook-form';
import { RadioButtonProps } from './radioModal';

const CustomRadioButton: React.FC<RadioButtonProps> = ({
  data,
  label,
}) => {

  const { register } = useForm();
  return (
    <>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>{label}</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          // defaultValue="female"
          name='radio-buttons-group'>
          {/* <FormControlLabel value={value} control={<Radio />} label={label} name={name} /> */}

          {data &&
            data.length > 0 &&
            data.map((v: any, key: any) => (
              <FormControlLabel
                key={key}
                value={v.value}
                control={<Radio {...(register(v.value) || {})} />}
                label={v.label}
              />
            ))}

          {/* <FormControlLabel value="male" control={<Radio />} label="Male"  name={name}/>
             <FormControlLabel value="female" control={<Radio />} label="Female" name={name}/> */}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CustomRadioButton;
