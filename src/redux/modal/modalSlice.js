import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  openModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    toggleModal(state, action) {
      state.openModal = !state.openModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
