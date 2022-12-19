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
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NewPage from 'pages/NewPage';
import OurFriend from 'pages/OurFriend';

const Test = () => {
  return <NoticesCategoriesNav />;
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
          <Route path="friends" element={<OurFriend />} />
          <Route path="news" element={<NewPage />} />
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
    </>
  );
};
