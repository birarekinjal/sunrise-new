import React from 'react';
import { useSetResetPassword } from './hook/useSetResetPassword';
import ResetPasswordForm from './resetPasswordForm';

const ForgotPassword = () => {
  const { handleOnSubmit } = useSetResetPassword();
  return (
    <div>
      <h2>Reset Password</h2>
      <ResetPasswordForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default ForgotPassword;
