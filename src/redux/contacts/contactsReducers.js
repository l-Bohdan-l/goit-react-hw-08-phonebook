import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from './actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(addContact.fulfilled, (state, action) => [
      ...state,
      action.payload,
    ]);
    builder.addCase(fetchContactsList.fulfilled, (_, action) => action.payload);
    builder.addCase(deleteContactsOps.fulfilled, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
  },
});

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: builder => {
    builder.addCase(
      fetchContactsList.pending,
      (state, action) => (state = true),
    );
    builder.addCase(
      fetchContactsList.fulfilled,
      (state, action) => (state = false),
    );
    builder.addCase(
      fetchContactsList.rejected,
      (state, action) => (state = false),
    );
  },
});

const filterReducer = createReducer('', {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactsSlice.reducer,
  filter: filterReducer,
  loading: loadingSlice.reducer,
});
