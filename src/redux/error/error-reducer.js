import {
  register,
  login,
  logout,
  getCurrentUser,
} from '../auth/auth-operations';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from '../contacts/actions';
import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchContactsList.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      addContact.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      deleteContactsOps.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      login.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      register.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      logout.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      getCurrentUser.rejected,
      (state, action) => (state = action.payload),
    );

    builder.addCase(deleteContactsOps.fulfilled, state => (state = null));
    builder.addCase(addContact.fulfilled, state => (state = null));
    builder.addCase(fetchContactsList.fulfilled, state => (state = null));
    builder.addCase(login.fulfilled, state => (state = null));
    builder.addCase(register.fulfilled, state => (state = null));
    builder.addCase(logout.fulfilled, state => (state = null));

    builder.addCase(deleteContactsOps.pending, state => (state = null));
    builder.addCase(addContact.pending, state => (state = null));
    builder.addCase(fetchContactsList.pending, state => (state = null));
    builder.addCase(login.pending, state => (state = null));
    builder.addCase(register.pending, state => (state = null));
    builder.addCase(logout.pending, state => (state = null));
  },
});

export default errorSlice.reducer;
