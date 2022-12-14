import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getUserPet = createAsyncThunk('pet/getUserPet', async thunkApi => {
  try {
    const { data } = await axios.get('/users/current');
    return data.user.pets;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});

export const addUserPet = createAsyncThunk(
  'pet/addUserPet',
  async ({ form, token }, thunkApi) => {
    try {
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      await axios.post('/pet', form, header);
      const { data } = await axios.get('user/current');
      toast.success('New pet added!');
      return data.user.pets;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  'pet/deleteUserPet',
  async (petId, thunkApi) => {
    try {
      await axios.delete(`/pet/${petId}`);
      const { data } = await axios.get('/user/current');
      toast.success('Pet was deleted!');
      return data.user.pets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
