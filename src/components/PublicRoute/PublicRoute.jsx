import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectToken);

  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};
