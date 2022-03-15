import React, {
  lazy, Suspense, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { FullScreenLoader, Toaster } from '../../infrastructure/components';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { RootState } from '../reducer/rootReducer';
import PrivateRoute from './privateRoute';
import UserManagement from '../modules/users/userList/userManagement';
import CreateUser from '../modules/users/addUser/createUser';

// const UserManagement = lazy(() => import('../modules/users/userList/userManagement'));
const ListTodo = lazy(() => import('../modules/todo/listTodo/listTodo'));
const Layout = lazy(() => import('../modules/layout/layout'));
const PageNotFound = lazy(() => import('../../infrastructure/components/pageNotFound/PageNotFound'));
const Login = lazy(() => import('../modules/authentication/login/login'));
const ForgotPassword = lazy(() => import('../modules/authentication/forgotPassword/forgotPassword'));
const ResetPassword = lazy(() => import('../modules/authentication/resetPassword/resetPassword'));
// const CreateUser = lazy(() => import('../modules/users/addUser/createUser'));


const ScrollToTop = (props: { children: any; }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return props.children;
};

function RoutesData() {

  const { accessToken } = useSelector((state: RootState) => state.login);
  let isAuthenticated = accessToken;
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<FullScreenLoader />}>
          <ScrollToTop>
            <Routes>
              <Route
                path={'/'}
                element={
                  !isAuthenticated ? <Login /> :
                    <Navigate to={'/layout'} />
                }
              />
              <Route path="/user" element={<PrivateRoute isAuthenticated={isAuthenticated} component={UserManagement} />} />
              <Route path="/add-user" element={<PrivateRoute isAuthenticated={isAuthenticated} component={CreateUser} />} />
              <Route path="/ListTodo" element={<ListTodo />} />
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* <PrivateRoute path="/layout" element={<Layout />} /> */}
              <Route path="/layout" element={<PrivateRoute isAuthenticated={isAuthenticated} component={Layout} />} />
              {/* <Route path="/demo" element={<DatePickerDemo />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Toaster />
          </ScrollToTop>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default RoutesData;
