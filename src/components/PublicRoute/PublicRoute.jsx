import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectToken);
  console.log(isLoggedIn, component, redirectTo);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};
