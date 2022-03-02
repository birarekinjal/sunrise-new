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
    NewLabel,
    NewPasswordPlaceholder,
    confirmLabel,
    confirmPasswordPlaceholder,
  } = constants.resetPassword;

  return (
    <form className='reset-panel'>
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
      
      <div className='btn-group'>
        <Button
          type='button'
          label='Cancel'
          color='primary'
          variant="outlined"
          className='customFilledBtn'
          onClick={handleSubmit(handleOnSubmit)}
        />
        <Button
          type='button'
          label='submit'
          color='primary'
          className='customFilledBtn'
          onClick={handleSubmit(handleOnSubmit)}
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
