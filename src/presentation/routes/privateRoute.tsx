import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({
  component: Component,
  loaderCount,
  isAuthenticated,
  userRole,
  ...rest
}: any) {

  return isAuthenticated ? (
    <Component  {...rest} />
  ) : <Navigate to="/login" />;
}
export default PrivateRoute;
