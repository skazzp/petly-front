import LoginPage from 'pages/LoginPage/LoginPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import UserPage from 'pages/UserPage/UserPage';
import { HomePage } from 'pages/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout';
// import NewPage from 'pages/newPage';

const Test = () => {
  return <h1>123</h1>;
};

export const App = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);
  return isLoading ? (
    <h1>LOADER</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="test" element={<Test />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="friends" element={<Test />} />
          <Route path="news" element={<Test />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route path="lost-found" element={<p>lost</p>} />
            <Route path="for-free" element={<p>free</p>} />
            <Route path="sell" element={<p>sell</p>} />
            <Route path="favorite" element={<p>favorite</p>} />
            <Route path="own" element={<p>own</p>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
