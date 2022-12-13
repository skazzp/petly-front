import NewPage from 'pages/newPage/NewPage';
import { Navigate, Route, Routes} from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';




export const App = () => {

      return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
     
      </Route>
       <Route path='/test' element={<NewPage/>}>
       </Route>
     </Routes>
    </>
  );
};


