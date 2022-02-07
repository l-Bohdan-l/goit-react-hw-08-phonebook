import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './auth-operations';

const initialState = {
  userData: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userData = { name: '', email: '' };
      state.isLogin = false;
      state.token = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.userData = { ...action.payload };
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
