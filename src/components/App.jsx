import NoticesPage from 'pages/NoticesPage/NoticesPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoadingMessage } from 'react-select/dist/declarations/src/components/Menu';
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
        <Route path="/" element={<SharedLayout />}>
          <Route path="/user" element={<h1>UserPage</h1>} />
        </Route>

        <Route path="/test" element={<Test />} />

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoadingMessage />} />
        <Route path="/register" element={<Test />} />
        <Route path="/friends" element={<Test />} />
        <Route path="/news" element={<Test />} />
        <Route path="/notice" element={<NoticesPage />}>
          <Route path="lost-found" element={<p>lost</p>} />
          <Route path="for-free" element={<p>free</p>} />
          <Route path="sell" element={<p>sell</p>} />
          <Route path="favorite" element={<p>favorite</p>} />
          <Route path="own" element={<p>own</p>} />
        </Route>
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
      </Routes>
    </>
  );
};
