import NewPage from 'pages/newPage';
import { Navigate, Route, Routes} from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Test = () => {
  return(<h1>Insert there your Component for testing</h1>)
}


export const App = () => {

      return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
      </Route>
      <Route path='/test' element={<Test/>}/>
      <Route path='/newpage' element={<NewPage/>}/>
     </Routes>

    </>
  );
};


