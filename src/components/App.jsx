import NoticesPage from 'pages/NoticesPage/NoticesPage';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from 'redux/auth/authOperation';
// import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Test = () => {
  return (
    <>
      <h1>Insert there your Component for testing</h1>;
    </>
  );
};

export const App = () => {
  // const { isLoading } = useSelector(selectIsLoading);
  // const isLoggedIn = useSelector(selectToken);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   isLoggedIn && dispatch(refreshUser());
  // }, [dispatch, isLoggedIn]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/user" element={<h1>UserPage</h1>} />
        </Route>
        <Route path="/test" element={<Test />} />
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
        <Route path="/notice" element={<NoticesPage />}>
          <Route path="lost-found" element={<p>lost</p>} />
          <Route path="for-free" element={<p>free</p>} />
          <Route path="sell" element={<p>sell</p>} />
          <Route path="favorite" element={<p>favorite</p>} />
          <Route path="own" element={<p>own</p>} />
        </Route>
      </Routes>
    </>
  );
};
