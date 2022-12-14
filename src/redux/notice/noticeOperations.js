import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperation';

axios.defaults.baseURL = 'https://petly-bc26.cyclic.app';

// Create new notice for logged in user
export const createNotice = createAsyncThunk(
  'notice/createNotice',
  async (notice, thunkApi) => {
    try {
      const response = await axios.post('/api/notices', notice);
      console.log('createNotice', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get all notices for logged in user
export const getAllTransactions = createAsyncThunk(
  'notice/getAllNotices',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/notices');
      console.log('getAllNotices', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get notice details
export const getNoticeDetails = createAsyncThunk(
  'notice/getNoticeDetails',
  async (item, thunkApi) => {
    try {
      const response = await axios.get(`api/notices/${item.id}`);
      console.log('notice/getNoticeDetails', response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Remove notice
export const deleteNotices = createAsyncThunk(
  'notice/deleteNotices',
  async (item, thunkApi) => {
    try {
      const response = await axios.delete(`api/notices/${item.id}`);
      console.log('notice/deleteNotices', response);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Get transactions summary for period
export const getTransactionsForPeriod = createAsyncThunk(
  'transaction/getTransactionsForPeriod',
  async (date, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    setAuthHeader(persistedToken);

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await axios.get(
        `api/transactions-summary?month=${date.month}&year=${date.year}`
      );
      // console.log('get Transactions For Period', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// export const getTransactionCategories = createAsyncThunk(
//   'transaction/getTransactionCategories',
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get('api/transaction-categories');
//       // console.log('getTransactionCategories', response);

//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.response.status);
//     }
//   }
// );

// Update transaction
// export const updateTransaction = createAsyncThunk(
//   'transaction/updateTransaction',
//   async ({ id, ...transaction }, thunkApi) => {
//     const oldSum = thunkApi.getState().transaction.modalData.amount;
//     try {
//       const response = await axios.patch(`api/transactions/${id}`, transaction);
//       // console.log('updateTransaction', response);
//       const newSum = response.data.amount - oldSum;
//       return { response: response.data, newSum };
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.response.status);
//     }
//   }
// );
