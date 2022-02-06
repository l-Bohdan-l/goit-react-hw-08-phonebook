import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postContact,
  deleteContact,
  fetchContact,
} from '../../services/contactsApi';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await postContact(contact);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetchContact();
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContactsOps = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const filterContact = createAction('contact/filter');
