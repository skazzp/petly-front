import { createSlice } from '@reduxjs/toolkit';

  const modalInitialState = {
    openModal: false,
  };

  const modalSlice = createSlice({
    name: 'modal',
    initialState: modalInitialState,
    reducers: {
      openModal(state, action) {
        state.openModal = true;
      },
      closeModal(state, action) {
        state.openModal = false;
      },
      toggleModal(state, action) {
        state.openModal = !state.openModal;
      },
    },
  });
  
  export const { openModal, closeModal, toggleModal } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;