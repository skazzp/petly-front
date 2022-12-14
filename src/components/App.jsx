
// import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Navigate, Route, Routes} from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Test = () => {
  return(<RegistrationPage/>)
}


export const App = () => {

      return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
      </Route>
      <Route path='/test' element={<Test/>}/>
     </Routes>
    </>
  );
};


