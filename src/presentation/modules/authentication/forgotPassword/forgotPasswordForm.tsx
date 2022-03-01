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

  const { emailPlaceholder, emailLabel } =
    constants.forgotPassword;

  const handleChange = (id: any) => {
    setOtp(id);
  };

  return (
    <form className='forgot-panel'>
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
      <div className='mb-2'>
        <Button
          type='button'
          label='submit'
          color='primary'
          className='mt-0 customFilledBtn'
          onClick={handleSubmit(handleOnSubmit)}
        />
      </div>
      <div className='mb-2'>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>-</span>}
        />
      </div>
      <Button
        type='button'
        label='Submit my otp'
        color='primary'
        className='customFilledBtn'
        disabled={true}
        onClick={handleSubmit(handleOnSubmit)}
      />
    </form>
  );
};

export default ForgotPasswordForm;
