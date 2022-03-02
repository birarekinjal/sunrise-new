import React from 'react';
import { useSetUserForm } from './hook/useSetUserForm';
import CreateUserForm from './createUserForm';

const CreateUser = () => {
  const { handleOnSubmit } = useSetUserForm();
  return (
    <div>
      <CreateUserForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default CreateUser;
