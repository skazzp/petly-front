import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petly-bc26.cyclic.app/';

export const getNews = createAsyncThunk('news', async thunkApi => {
  try {
    const response = await axios.get('/api/info/news');

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});
