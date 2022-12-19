import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOurFriends = createAsyncThunk('friends', async thunkApi => {
  try {
    const response = await axios.get('/api/info/partnership');
  
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});
