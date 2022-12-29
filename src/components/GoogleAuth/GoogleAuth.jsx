import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { setTokenFromGAuth } from 'redux/auth/authSlice';

const GoogleAuth = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setTokenFromGAuth(token));
    dispatch(refreshUser());
    navigate('/notices');
  }, [dispatch, navigate, token]);

  return (
    
      <LoaderSpiner />
    
  );
};

export default GoogleAuth;
