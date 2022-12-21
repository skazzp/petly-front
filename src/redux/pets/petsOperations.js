import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getUserPet = createAsyncThunk('pet/getUserPet', async thunkApi => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;
  const header = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${persistedToken}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const { data } = await axios.get('/api/usersinfo', header);
    console.log(data.userPets);
    return data.userPets;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});

export const addUserPet = createAsyncThunk(
  'pet/addUserPet',
  async (form , thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    //  const formData = new FormData();
    console.log(form)
    // formData.append('image', form);
    console.log(form)
    // console.log(formData)
    const header = {
      method: 'post',
     headers: {
       Accept: 'application/json',
       Authorization: `Bearer ${persistedToken}`,
       'Content-Type': 'multipart/form-data',
     },
   };

    try {
     const response= await axios.post('/api/pets/', form, header);
    
      toast.success('New pet added!');
      
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  'pet/deleteUserPet',
  async (_id, thunkApi) => {
    try {
      const response= await axios.delete(`/api/pets/${_id}`);
      // const { data } = await axios.get('/user/current');
      toast.success('Pet was deleted!');
      console.log(response.data)
      return response.data._id;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
