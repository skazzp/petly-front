import { Navigate, Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from 'redux/auth/authOperation';
// import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Test = () => {
  return <h1>Insert there your Component for testing</h1>;
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
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
