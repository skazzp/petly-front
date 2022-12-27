import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  joined: false,
  roomId: null,
  userName: null,
  users: [],
  messages: [],
};

const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const chatSlice = createSlice({
  name: 'chat',

  initialState: userInitialState,

  reducers: {
    changeUserData(state, action) {
      // state.user = { ...state.user, ...action.payload };
    },
    setTokenFromGAuth(state, action) {
      // console.log('hello', action.payload);
      // state.token = action.payload;
    },
  },
  extraReducers: builder => {
    // builder.addCase(addFavorites.pending, pendingHandlerAuth);
    // builder.addCase(addFavorites.rejected, rejectedHandler);
    // builder.addCase(addFavorites.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.isLoading = false;
    //   state.user.favorites.push(action.payload);
    //   // TODO: редактировать нужный нотис в стейте или юзера ?
    // });
  },
});

export const { changeUserData, setTokenFromGAuth } = chatSlice.actions;
export const authReducer = chatSlice.reducer;
