import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refreshUser } from 'redux/auth/authOperation';
import { selectToken } from 'redux/auth/authSelectors';
import GoogleAuth from './GoogleAuth/GoogleAuth';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { SharedLayout } from './SharedLayout';
import { LoaderSpinner } from './LoaderSpinner/LoaderSpinner';
import ShopPage from 'pages/ShopPage/ShopPage';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const FriendsPage = lazy(() => import('../pages/FriendsPage'));

export const App = () => {
  const isLoggedIn = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="google-redirect" element={<GoogleAuth />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/user"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route path="friends" element={<FriendsPage />} />

          <Route path="news" element={<NewsPage />}>
            <Route path="search" element={<></>} />
          </Route>
          <Route path="shop" element={<ShopPage/>}></Route>
          <Route path="notices" element={<NoticesPage />}>
            <Route path="lost-found" element={<></>} />
            <Route path="for-free" element={<></>} />
            <Route path="sell" element={<></>} />
            <Route path="favorites" element={<></>} />
            <Route path="personal" element={<></>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
