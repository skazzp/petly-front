import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperation';

axios.defaults.baseURL = 'https://petly-bc26.cyclic.app';

// Create new notice for logged in user
export const createNotice = createAsyncThunk(
  'notice/createNotice',
  async (notice, thunkApi) => {
    try {
      const response = await axios.post('/api/notices/create', notice);
      console.log('createNotice', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get all notices for logged in user
export const getAllNotices = createAsyncThunk(
  'notice/getAllNotices',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/api/notices');
      // console.log('getAllNotices', response);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get notice details
export const getNoticeDetails = createAsyncThunk(
  'notice/getNoticeDetails',
  async (item, thunkApi) => {
    try {
      const response = await axios.get(`/api/notices/${item.id}`);
      // console.log('notice/getNoticeDetails', response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Remove notice
export const deleteNotices = createAsyncThunk(
  'notice/deleteNotices',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/api/notices/delete/${id}`);
      console.log('notice/deleteNotices', response);
      return id; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get favorites
export const getFavoriteNotices = createAsyncThunk(
  'notice/getFavoriteNotices',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);

    try {
      const response = await axios.get(`/api/notices/favorites`);
      // console.log('notice/getFavoriteNotices', response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get User notices
export const getUserNotices = createAsyncThunk(
  'notice/getUserNotices',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);

    try {
      const response = await axios.get(`/api/notices/personal`);
      // console.log('notice/getUserNotices', response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Remove from favorites
export const deleteFavorites = createAsyncThunk(
  'notice/deleteFavorites',
  async (id, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);
      const response = await axios.delete(
        `/api/notices/favorites/delete/${id}`
      );
      console.log('notice/deleteFavorites', response);
      return id; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Add to favorites
export const addFavorites = createAsyncThunk(
  'notice/addFavorites',
  async (id, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);
      const response = await axios.get(`/api/notices/favorites/${id}`);
      console.log('notice/addFavorites', response);
      return id; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get by category
export const getByCategory = createAsyncThunk(
  'notice/getByCategory',
  async (category, thunkApi) => {
    let path;
    if (category === 'personal' || category === 'favorites') {
      path = category;
    } else {
      path = `category/${category}`;
    }
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);
      const response = await axios.get(`/api/notices/${path}`);
      return response.data.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
