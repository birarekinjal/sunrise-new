import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, OtpInput } from '../../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema/forgotPasswordSchema';
import { constants } from '../../../../application/constants/constant';

const ForgotPasswordForm = (props: any) => {
  const { handleOnSubmit } = props;
  const [otp, setOtp] = useState('');

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
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const { backToLogin, emailPlaceholder, emailLabel, heading, title } =
    constants.forgotPassword;

  const handleChange = (id: any) => {
    setOtp(id);
  };

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
          placeholder={emailPlaceholder}
          label={emailLabel}
          variant='outlined'
          registeredEvents={register('email')}
          name='email'
          type='email'
          error={errors.email?.message}
          showError={true}
          required
        />
        <br></br>
        <br></br>

        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>-</span>}
        />

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

export default ForgotPasswordForm;
