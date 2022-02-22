import React from 'react';
import { useSetUserData } from './hook/useSetUserData';
import LoginForm from './loginForm';

const Login = () => {

  const { handleOnSubmit } = useSetUserData();
  return (
    <div>
      <h2> Login Page</h2>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default Login;