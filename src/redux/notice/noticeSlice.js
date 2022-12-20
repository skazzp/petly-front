import { createSlice } from '@reduxjs/toolkit';
// import { logOutUser } from 'redux/auth/authOperation';
import {
  createNotice,
  getAllNotices,
  getNoticeDetails,
  deleteNotices,
  getFavoriteNotices,
  getUserNotices,
  deleteFavorites,
  addFavorites,
  getByCategory,
  getByQuery,
} from './noticeOperations';

const noticeInitialState = {
  notices: [],
  // categories: [],
  isLoading: false,
  error: null,
  isModalAddNoticeOpen: false,
  isLearnMoreModalOpen: false,
  modalData: {},
};

const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isModalAddNoticeOpen = false;
};

const noticeSlice = createSlice({
  name: 'notice',

  initialState: noticeInitialState,

  reducers: {
    openModal(state, action) {
      state.isModalAddNoticeOpen = true;
    },
    closeModal(state, action) {
      state.isModalAddNoticeOpen = false;
      state.modalData = {};
    },
    openLearnMoreModal(state, action) {
      state.isLearnMoreModalOpen = true;
    },
    closeLearnMoreModal(state, action) {
      state.isLearnMoreModalOpen = false;
      state.modalData = {};
    },
    addModalData(state, action) {
      state.modalData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createNotice.pending, pendingHandlerAuth);
    builder.addCase(getAllNotices.pending, pendingHandlerAuth);
    builder.addCase(getNoticeDetails.pending, pendingHandlerAuth);
    builder.addCase(deleteNotices.pending, pendingHandlerAuth);
    builder.addCase(getFavoriteNotices.pending, pendingHandlerAuth);
    builder.addCase(getUserNotices.pending, pendingHandlerAuth);
    builder.addCase(deleteFavorites.pending, pendingHandlerAuth);
    builder.addCase(addFavorites.pending, pendingHandlerAuth);
    builder.addCase(getByCategory.pending, pendingHandlerAuth);
    builder.addCase(getByQuery.pending, pendingHandlerAuth);

    builder.addCase(createNotice.rejected, rejectedHandler);
    builder.addCase(getAllNotices.rejected, rejectedHandler);
    builder.addCase(getNoticeDetails.rejected, rejectedHandler);
    builder.addCase(deleteNotices.rejected, rejectedHandler);
    builder.addCase(getFavoriteNotices.rejected, rejectedHandler);
    builder.addCase(getUserNotices.rejected, rejectedHandler);
    builder.addCase(deleteFavorites.rejected, rejectedHandler);
    builder.addCase(addFavorites.rejected, rejectedHandler);
    builder.addCase(getByCategory.rejected, rejectedHandler);
    builder.addCase(getByQuery.rejected, rejectedHandler);

    builder.addCase(createNotice.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices.push(action.payload);
      state.isModalAddNoticeOpen = false;
    });
    builder.addCase(getAllNotices.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = action.payload;
    });
    builder.addCase(getNoticeDetails.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.modalData = action.payload;
      // TODO: допрацювати під модалку
    });
    builder.addCase(deleteNotices.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = state.notices.filter(
        notice => notice._id !== action.payload
      );
    });
    builder.addCase(getFavoriteNotices.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = action.payload;
    });
    builder.addCase(getUserNotices.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = action.payload;
    });
    builder.addCase(deleteFavorites.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      // TODO: редактировать нужный нотис в стейте или юзера ?
    });
    builder.addCase(addFavorites.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      // TODO: редактировать нужный нотис в стейте или юзера ?
    });
    builder.addCase(getByCategory.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = action.payload;
    });
    builder.addCase(getByQuery.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.notices = action.payload;
    });
  },
});

export const {
  openModal,
  closeModal,
  addModalData,
  closeLearnMoreModal,
  openLearnMoreModal,
} = noticeSlice.actions;
export const noticeReducer = noticeSlice.reducer;
