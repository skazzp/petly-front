import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser ',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/api/auth/sign-up', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/api/auth/sign-in', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      const response = await axios.delete('/api/auth/sign-out');
      clearAuthHeader();
      // console.log('logOutUser', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    setAuthHeader(persistedToken);

    if (persistedToken === null) {
      return thunkApi.rejectWithValue(null);
    }

    try {
      const response = await axios.get('/api/users/current');
      // console.log('getUser', response);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
