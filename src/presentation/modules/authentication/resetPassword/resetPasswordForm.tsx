import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { constants } from '../../../../application/constants/constant';
import schema from './schema/resetPassword';

const ResetPasswordForm = (props: any) => {
  const { handleOnSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
    // reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(schema),
  });

  const {
    heading,
    title,
    NewLabel,
    NewPasswordPlaceholder,
    confirmLabel,
    confirmPasswordPlaceholder,
    backToLogin,
  } = constants.resetPassword;

  return (
    <div>
      <form>
        <p>
          <a href='/login' id='link' rel='nofollow'>
            {backToLogin}
          </a>
        </p>
        {/* Email */}
        <h1>{heading}</h1>
        <h6>{title}</h6>
        <Input
          placeholder={NewPasswordPlaceholder}
          label={NewLabel}
          variant='outlined'
          registeredEvents={register('password')}
          name='password'
          type='password'
          error={errors.password?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>

        <Input
          placeholder={confirmPasswordPlaceholder}
          label={confirmLabel}
          variant='outlined'
          registeredEvents={register('confirm_password')}
          name='confirm_password'
          type='password'
          error={errors.confirm_password?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>

        <Button
          type='button'
          label='submit'
          color='primary'
          onClick={handleSubmit(handleOnSubmit)}
        />
      </form>
    </div>
  );
};

export default ResetPasswordForm;
