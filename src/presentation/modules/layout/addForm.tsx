import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Input,
  NumberInput,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Switch,
  Checkbox,
  // SelectDropdown,
} from '../../../infrastructure/components';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    // reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      count: 0,
      date: '',
      time: '',
      dateTime: '',
      checkSwitch: '',
      checkbox: '',
      selectMenu: [],
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    // reset();
  };


  return (
    <div>
      <form>
        {/* Email */}
        <Input
          placeholder="Enter Email Here..."
          label="Email"
          variant="outlined"
          registeredEvents={register('email')}
          name="email"
          type="email"
          error={errors.email?.message}
          showError={true}
          required
        />
        <br></br><br></br>

        {/* Password */}
        <Input
          placeholder="Enter Password Here..."
          label="Password"
          variant="outlined"
          registeredEvents={register('password')}
          name="password"
          type="password"
          error={errors.password?.message}
          showError={true}
          // inputProps={{ endAdornment: handleIcon('end') }}
          required
        />
        <br></br><br></br>

        {/* Number  */}
        {/* <NumberInput
          placeholder='count'
          label='ccc'
          variant='outlined'
          registeredEvents={register('count')}
          name='count'
        /> <br></br><br></br> */}

        <Controller
          control={control}
          name={'count'}
          render={({ field: { onChange } }) => (
            <NumberInput
              // placeholder='count'
              // label='ccc'
              // variant='outlined'
              onChange={onChange}
              registeredEvents={register('count')}
            // name='count'
            />
          )}
        />


        {/* Date picker */}
        <Controller
          control={control}
          name={'date'}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        /> <br></br><br></br>


        {/* Time Picker */}
        <Controller
          control={control}
          name={'time'}
          render={({ field: { onChange, onBlur, value } }) => (
            <TimePicker
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        /> <br></br><br></br>


        {/* dateTime picker */}
        <Controller
          control={control}
          name={'dateTime'}
          render={({ field: { onChange, onBlur, value } }) => (
            <DateTimePicker
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        /> <br></br><br></br>

        {/* switch */}
        <Controller
          control={control}
          name={'checkSwitch'}
          render={({ field }) => (
            <Switch {...field} />
          )}
        /> <br></br><br></br>


        {/* checkbox */}
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => <Checkbox {...field} label={'subject'} color='secondary' />}
        /> <br></br><br></br>


        {/* <Controller 
              name='selectMenu'
                control={control}
                render={({ field }) => (
                    <Select
                    value={field.value} 
                    onChange={field.onChange}
                    >
                    { 
                        names.map((name) => (
                        <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                        </MenuItem>

                        ))}
                    </Select>   
                )
            }
          />  */}


        {/* <Controller
          name='selectMenu'
          control={control}
          render={({ field }) => {
            return (
              <SelectDropdown
                value={field.value}
                multiple={true}
                onChange={field.onChange}
                options={options}
                label='Select'
              />

            );
          }
          }
        /> */}

        {/* 
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Controller 
             name='selectMenu'
              control={control}
              render={({ field }) => (
                <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={field.value}
          onChange={field.onChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
          
              )
          }
          />
      </FormControl> */}
        <Button type="button" label="submit" onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};

export default AddForm;