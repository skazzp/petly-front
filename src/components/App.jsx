import LoginPage from 'pages/LoginPage/LoginPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import UserPage from 'pages/UserPage/UserPage';
import { HomePage } from 'pages/HomePage';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';
import OurFriend from 'pages/OurFriend/OurFriend';
import NewsPage from 'pages/NewsPage/NewsPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { LoaderSpiner } from './LoaderSpiner/LoaderSpiner';

// import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';

const Test = () => {
  // return <NoticesCategoriesNav />;
  return <h1>123</h1>;
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectToken);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);
  return isLoading ? (
    <LoaderSpiner />
  ) : (
    <Suspense fallback={<LoaderSpiner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="test" element={<Test />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/notices"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/notices" component={<LoginPage />} />
            }
          />
          <Route path="friends" element={<OurFriend />} />
          <Route path="news" element={<NewsPage />} />
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
    </Suspense>
  );
};
