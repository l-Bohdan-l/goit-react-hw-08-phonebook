import phonebookReducers from '../contacts/contactsReducers';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const store = configureStore({
  reducer: {
    phonebookReducers,
  },
});

export default store;
