import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import AddNoticeButton from './AddNoticeButton';

const Test = () => {
  return (
    <>
      <h1>Hello</h1>
      <AddNoticeButton></AddNoticeButton>
    </>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};
