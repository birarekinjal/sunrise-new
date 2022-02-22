import React from 'react';

import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema/login';

const LoginForm = (props: any) => {
  const { handleOnSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    // reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <form>
      {/* This input used for email */}
      <Input
        placeholder="Enter Email Here..."
        label="Email"
        variant="outlined"
        registeredEvents={register('email')}
        name="email"
        type="email"
        error={errors.email?.message}
        showError={touchedFields && touchedFields.email}
        required
      />
      <br></br><br></br>

      {/* This input used for password */}
      <Input
        placeholder="Enter Password Here..."
        label="Password"
        variant="outlined"
        registeredEvents={register('password')}
        name="password"
        type="password"
        isPassword={true}
        showError={touchedFields && touchedFields.password}
        error={errors.password?.message}
        required
      />
      <Button
        type='button'
        label='submit'
        color='secondary'
        onClick={handleSubmit(handleOnSubmit)}
      />
    </form>

  );
};

export default LoginForm;