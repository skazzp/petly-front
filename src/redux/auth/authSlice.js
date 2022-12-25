import { createSlice } from '@reduxjs/toolkit';
import { addFavorites, deleteFavorites } from 'redux/notice/noticeOperations';

import {
  refreshUser,
  loginUser,
  logOutUser,
  registerUser,
  editUser,
  editAvatar,
} from './authOperation';

const userInitialState = {
  user: {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
    _id: null,
    avatarURL: '',
    favorites: [],
  },
  token: null,
  isLoading: false,
  error: '',
  avatarLoading: false,
};

const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',

  initialState: userInitialState,

  reducers: {
    changeUserData(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, pendingHandlerAuth);
    builder.addCase(registerUser.rejected, rejectedHandler);
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      const { email, password, name, city, phone, _id, avatarURL, favorites } =
        action.payload;
      state.user = {
        ...state.user,
        email,
        password,
        name,
        city,
        phone,
        _id,
        avatarURL,
        favorites,
      };
      state.token = action.payload.token;
    });

    builder.addCase(loginUser.pending, pendingHandlerAuth);
    builder.addCase(loginUser.rejected, rejectedHandler);
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      const { email, password, name, city, phone, _id, avatarURL, favorites } =
        action.payload;
      state.user = {
        email,
        password,
        name,
        city,
        phone,
        _id,
        avatarURL,
        favorites,
      };
      state.token = action.payload.token;
    });

    builder.addCase(logOutUser.pending, (state, action) => {
      state.error = null;
    });
    builder.addCase(logOutUser.rejected, rejectedHandler);
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = {};
      state.token = null;
    });

    builder.addCase(refreshUser.pending, pendingHandlerAuth);
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.token = null;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
    });

    builder.addCase(editUser.pending, pendingHandlerAuth);
    builder.addCase(editUser.rejected, rejectedHandler);
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      // console.log(123, action.payload);
      // state.user = { ...state.user, ...action.payload.avatarURL };
      // state.token = null;
      // state.user.avatarURL = action.payload.avatarURL;
    });

    builder.addCase(editAvatar.pending, (state, _) => {
      state.avatarLoading = true;
    });
    builder.addCase(editAvatar.rejected, (state, action) => {
      state.avatarLoading = false;
      state.error = action.payload;
    });
    builder.addCase(editAvatar.fulfilled, (state, action) => {
      state.error = null;
      state.avatarLoading = false;
      // console.log(123, action.payload);
      // state.user = { ...state.user, ...action.payload.avatarURL };
      // state.token = null;
      state.user.avatarURL = action.payload.avatarURL;
    });

    builder.addCase(addFavorites.pending, pendingHandlerAuth);
    builder.addCase(addFavorites.rejected, rejectedHandler);
    builder.addCase(addFavorites.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user.favorites.push(action.payload);
      // TODO: редактировать нужный нотис в стейте или юзера ?
    });

    builder.addCase(deleteFavorites.pending, pendingHandlerAuth);
    builder.addCase(deleteFavorites.rejected, rejectedHandler);
    builder.addCase(deleteFavorites.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user.favorites = state.user.favorites.filter(
        fav => fav !== action.payload
      );
      // TODO: редактировать нужный нотис в стейте или юзера ?
    });
  },
});

export const { changeUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
