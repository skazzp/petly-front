import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectToken);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  return isAuth ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
