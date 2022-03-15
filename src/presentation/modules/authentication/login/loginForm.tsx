import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Checkbox } from '../../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema/login';
import Link from '@material-ui/core/Link';
import { constants } from '../../../../application/constants/constant';

const LoginForm = (props: any) => {
  const { handleOnSubmit, loading } = props;

  const {
    emailPlaceholder,
    passwordPlaceholder,
    forgotPassword,
    rememberMePlaceholder,
    emailLabel,
    passwordLabel,
  } = constants.loginPage;

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
    <form className='login-panel'>
      {/* This input used for email */}
      <Input
        placeholder={emailPlaceholder}
        label={emailLabel}
        variant="outlined"
        registeredEvents={register('email')}
        name="email"
        type="email"
        error={errors.email?.message}
        showError={touchedFields && touchedFields.email}
        required
      />
      {/* This input used for password */}
      <Input
        placeholder={passwordPlaceholder}
        label={passwordLabel}
        variant="outlined"
        registeredEvents={register('password')}
        name='password'
        type='password'
        isPassword={true}
        showError={touchedFields && touchedFields.password}
        error={errors.password?.message}
        required
      />
      <div className='mb-2 forgot-password'>
        <div className='remember'>
          <Checkbox label={rememberMePlaceholder} color='primary' checked />
        </div>
        <div className='forgot-password'>
          <Link href="#">{forgotPassword}</Link>
        </div>
      </div>
      <Button
        type='button'
        label='Sign in'
        color='primary'
        className='customFilledBtn'
        onClick={handleSubmit(handleOnSubmit)}
        isLoading={loading}
      />
    </form>
  );
};

export default LoginForm;
