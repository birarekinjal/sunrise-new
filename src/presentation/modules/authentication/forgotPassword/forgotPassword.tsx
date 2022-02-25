import React from 'react';
import { useSetForgotPassword } from './hook/useSetForgotPassword';
import ForgotPasswordForm from './forgotPasswordForm';

const ForgotPassword = () => {
  const { handleOnSubmit } = useSetForgotPassword();
  return (
    <div>
      <h2>ForgotPassword</h2>
      <ForgotPasswordForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default ForgotPassword;
