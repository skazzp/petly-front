import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperation';

axios.defaults.baseURL = 'https://petly-bc26.cyclic.app';
// axios.defaults.baseURL = 'http://localhost:3030/';
// Create new notice for logged in user
export const createNotice = createAsyncThunk(
  'notice/createNotice',
  async (notice, thunkApi) => {
    // const formData = new FormData();
    // formData.append('image', notice);
    // console.log(notice);
    const {
      image,
      category,
      title,
      name,
      birthday,
      breed,
      sex,
      location,
      price,
      comments,
    } = notice;
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('name', name);
    formData.append('birthday', birthday);
    formData.append('breed', breed);
    formData.append('sex', sex);
    formData.append('location', location);
    if (price) {
      formData.append('price', price);
    }
    formData.append('comments', comments);
    for (let elem of image) {
      formData.append('image', elem);
    }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const response = await axios.post(
        '/api/notices/create',
        formData,
        config
      );
      // console.log('createNotice', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get all notices for logged in user
export const getAllNotices = createAsyncThunk(
  'notice/getAllNotices',
  async (page, thunkApi) => {
    try {
      const response = await axios.get('/api/notices', {
        params: { page },
      });
      // console.log('getAllNotices', response);
      return response.data;
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
      await axios.delete(`/api/notices/delete/${id}`);
      // console.log('notice/deleteNotices', response);
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
      await axios.delete(`/api/notices/favorites/delete/${id}`);
      // console.log('notice/deleteFavorites', response);
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
      await axios.get(`/api/notices/favorites/${id}`);
      // console.log('notice/addFavorites', response);
      return id; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get by category
export const getByCategory = createAsyncThunk(
  'notice/getByCategory',

  async ({ category, page }, thunkApi) => {
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

      const response = await axios.get(`/api/notices/${path}`, {
        params: { page },
      });
      // console.log(response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get by query
export const getByQuery = createAsyncThunk(
  'notice/getByQuery',
  async (query, thunkApi) => {
    try {
      const response = await axios.get(`/api/notices/search?text=${query}`);
      // console.log('notice/getByQuery', response.data);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get by category query
export const getByCategoryQuery = createAsyncThunk(
  'notice/getByCategoryQuery',

  async ({ category, page, query }, thunkApi) => {
    let path;
    if (category === 'personal' || category === 'favorites') {
      path = category;
    } else {
      path = `${category}`;
      console.log(path);
    }
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);

      const response = await axios.get(`/api/notices/search?text=${query}&`, {
        params: { page, category },
      });
      // console.log(response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
