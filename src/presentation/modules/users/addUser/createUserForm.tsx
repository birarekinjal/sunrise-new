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
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FileUploadDropZone from '../../../../infrastructure/components/dropzone/dropzone';

const CreateUserForm = (props: any) => {
  const { handleOnSubmit, isLoading } = props;

  type FormValues = {
    email: string,
    password: string,
    role: string,
    permissions: any,
    upload: any,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    // reset,
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      role: '',
      permissions: [],
      // upload: [],
    },
    resolver: yupResolver(schema),
  });

  const { emailPlaceholder, passwordPlaceholder, buttons, permissions, role } =
    constants.createUser;

  return (
    <>
      <h1>Add User</h1>
      <Card>
        <CardContent>
          <form >
            {/* <Controller
              name='upload'
              control={control}
              render={({ fieldState: { invalid }, field: { onChange } }) => (
                <>
                  <FileUploadDropZone
                    disabled={false}
                    registeredEvents={register('upload')}
                    onDrop={onChange}
                    showError={invalid}
                    error={errors.upload?.message}
                    accept={'.png , .jpg , .gpeg , .pdf'}
                  />
                </>
              )}
            /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Input
                  placeholder={emailPlaceholder}
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
                  label='Password'
                  variant='outlined'
                  registeredEvents={register('password')}
                  name='password'
                  type='password'
                  error={errors.password?.message}
                  showError={true}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
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
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='button'
                  label={buttons.submit}
                  color='primary'
                  className={'customFilledBtn'}
                  onClick={handleSubmit(handleOnSubmit)}
                  isLoading={isLoading}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card >
    </>
  );
};

export default CreateUserForm;
