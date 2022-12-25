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

  return <p>Loading User</p>;
};

export default GoogleAuth;

// http://localhost:3000/petly-front/google-redirect?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliYThiOTExYTk2Mjg4ZjcyZTNkYTciLCJpYXQiOjE2NzEzOTI0OTMsImV4cCI6MTY3Mzk4NDQ5M30.YkKOj29hWLDFkIIbAdtQRKTldhpg3p1XDhPARDEV1nc
