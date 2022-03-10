import React from 'react';
import { useSetUserForm } from './hook/useSetUserForm';
import CreateUserForm from './createUserForm';
import WithContainerLayout from '../../../layout/withContainer';

const CreateUser = () => {
  const { handleOnSubmit, isLoading } = useSetUserForm();

  return (
    <WithContainerLayout>
      <section className='main-container layout-page'>
        <CreateUserForm handleOnSubmit={handleOnSubmit} isLoading={isLoading} />
      </section>
    </WithContainerLayout>
  );
};

export default CreateUser;
