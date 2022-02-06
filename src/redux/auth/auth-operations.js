import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerApi,
  logIn,
  logOut,
  fetchCurrentUser,
  token,
} from '../../services/userApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const responce = await registerApi(credentials);
      console.log(responce);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const responce = await logIn(credentials);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await logOut();
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const responce = await fetchCurrentUser();
      console.log('data', responce);
      return responce;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

// export const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error));
//     token.unset();
//     toast.warn('Authorization timed out! Please authenticate again!');
//   }
// };
