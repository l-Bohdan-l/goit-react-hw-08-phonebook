import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from './actions';

// const contacts = createReducer([], {
//   [fetchContactsList.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContactsOps.fulfilled]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload.id);
//   },
// });

// const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {
//   [fetchContactsList.rejected]: (_, { payload }) => payload,
//   [fetchContactsList.pending]: () => null,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,
// });

// export default combineReducers({
//   contacts,
//   filter,
//   error,
// });

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
