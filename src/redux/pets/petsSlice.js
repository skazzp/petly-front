import { createSlice } from '@reduxjs/toolkit';
import { refreshUser } from 'redux/auth/authOperation';

import { getUserPet, addUserPet, deleteUserPet } from './petsOperations';

const petsInitialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  extraReducers: builder => {
    builder.addCase(refreshUser.pending, pendingHandler);
    builder.addCase(refreshUser.rejected, rejectedHandler);
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.pets = action.payload.userPets;
    });

    builder.addCase(addUserPet.pending, pendingHandler);
    builder.addCase(addUserPet.rejected, rejectedHandler);
    builder.addCase(addUserPet.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      console.log(action.payload)
      state.pets.push(action.payload);
    });

    builder.addCase(deleteUserPet.pending, pendingHandler);
    builder.addCase(deleteUserPet.rejected, rejectedHandler);
    builder.addCase(deleteUserPet.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      console.log(state.pets)
      state.pets = state.pets.filter(
        pet => pet._id !== action.payload._id)
    });
  },
});

export const petsReducer = petsSlice.reducer;
