import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Input,
  SelectDropdown,
} from '../../../../infrastructure/components';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  constants,
  roles,
  permission,
} from '../../../../application/constants/constant';
import schema from './schema/createUserSchema';

const CreateUserForm = (props: any) => {
  const { handleOnSubmit } = props;

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
      role: '',
      permissions: [],
    },
    resolver: yupResolver(schema),
  });

  const { emailPlaceholder, passwordPlaceholder, buttons, permissions, role } =
    constants.createUser;

  return (
    <div>
      <form>
        <Input
          placeholder={emailPlaceholder}
          data_testid='email'
          label='Email'
          variant='outlined'
          registeredEvents={register('email')}
          name='email'
          type='email'
          error={errors.email?.message}
          showError={true}
          required
        />

        <Input
          placeholder={passwordPlaceholder}
          data_testid='password'
          label='Password'
          variant='outlined'
          registeredEvents={register('password')}
          name='password'
          type='password'
          error={errors.password?.message}
          showError={true}
          required
        />

        <Controller
          name='role'
          control={control}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors?.role?.message}
              showError={true}
              options={roles}
              multiple={false}
              label={role}
            />
          )}
        />

        <Controller
          name='permissions'
          control={control}
          render={({ field }) => (
            <SelectDropdown
              value={field.value}
              onChange={field.onChange}
              error={errors?.permissions?.message}
              showError={true}
              options={permission}
              multiple={true}
              label={permissions}
            />
          )}
        />
        <Button
          type='button'
          label={buttons.submit}
          color='primary'
          onClick={handleSubmit(handleOnSubmit)}
        />
      </form>
    </div>
  );
};

export default CreateUserForm;
