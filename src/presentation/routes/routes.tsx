import React, {
  lazy, Suspense, useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { FullScreenLoader } from '../../infrastructure/components';
import PrivateRoute from './privateRoute';
const UserManagement = lazy(() => import('../modules/users/userList/userManagement'));
const ListTodo = lazy(() => import('../modules/todo/listTodo/listTodo'));
const Layout = lazy(() => import('../modules/layout/layout'));
const PageNotFound = lazy(() => import('../../infrastructure/components/pageNotFound/PageNotFound'));
const Login = lazy(() => import('../modules/login/login'));

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
  return (
    <Router>
      <Suspense fallback={<FullScreenLoader />}>
        <ScrollToTop>
          <Routes>
            {/* <Route path="/todo-list" element={<ListTodo />} /> */}
            <Route path="/user" element={<PrivateRoute isAuthenticated component={UserManagement} />} />
            <Route path="/ListTodo" element={<ListTodo />} />
            <Route path="/" element={<Login />} />
            {/* <PrivateRoute path="/layout" element={<Layout />} /> */}
            <Route path="/layout" element={<PrivateRoute isAuthenticated component={Layout} />} />
            {/* <Route path="/demo" element={<DatePickerDemo />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default RoutesData;
