import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({
  component: Component,
  loaderCount,
  isAuthenticated,
  userRole,
  ...rest
}: any) {
  console.log(isAuthenticated, "isAuthenticated");
  return isAuthenticated ? (
    <Component  {...rest} />
  ) : <Navigate to="/" />;
}
export default PrivateRoute;
