import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
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
  },
});

export default authSlice.reducer;
