import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerApi, logIn, logOut } from '../../services/userApi';

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
