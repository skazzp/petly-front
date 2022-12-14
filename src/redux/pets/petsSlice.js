import { createSlice } from '@reduxjs/toolkit';

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
    builder.addCase(getUserPet.pending, pendingHandler);
    builder.addCase(getUserPet.rejected, rejectedHandler);
    builder.addCase(getUserPet.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.pets = action.payload;
    });

    builder.addCase(addUserPet.pending, pendingHandler);
    builder.addCase(addUserPet.rejected, rejectedHandler);
    builder.addCase(addUserPet.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.pets = action.payload;
    });

    builder.addCase(deleteUserPet.pending, pendingHandler);
    builder.addCase(deleteUserPet.rejected, rejectedHandler);
    builder.addCase(deleteUserPet.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.pets = action.payload;
    });
  },
});

export const petsReducer = petsSlice.reducer;
