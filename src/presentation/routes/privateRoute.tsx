import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../layout/adminLayout';

const PrivateRoute = ({
  component: Component,
  loaderCount,
  isAuthenticated,
  userRole,
  ...rest
}: any) => {

  return isAuthenticated ? <AdminLayout
    component={Component}
    loaderCount={loaderCount}
    {...rest}
  /> : <Navigate to="/login" />;
};
export default PrivateRoute;
