import './App.scss';
import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ContactForm } from './components/ContactForm/ContactForm';
// import { ContactsList } from './components/ContactList/ContactList';
// import { Container } from './components/Container/Container';
// import { Filter } from './components/Filter/Filter';
// import {
//   addContact,
//   fetchContactsList,
//   deleteContactsOps,
//   filterContact,
// } from './redux/contacts/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

import { Contacts } from './components/Contacts/Contacts';
import { HomePage } from './components/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { getCurrentUser } from '../src/redux/auth/auth-operations';
import { PrivateRoute } from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  // const contacts = useSelector(state => state.phonebookReducers.contacts);
  // const filter = useSelector(state => state.phonebookReducers.filter);
  const dispatch = useDispatch();

  // const createContact = newContact => {
  //   const dublicateContact = contacts.some(checkedContact => {
  //     return (
  //       checkedContact.name.toLowerCase() === newContact.name.toLowerCase()
  //     );
  //   });

  //   if (dublicateContact) {
  //     alert(`${newContact.name} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact(newContact));
  // };

  // const handleDelete = contactId => {
  //   dispatch(deleteContactsOps(contactId));
  // };

  // const changeFilter = e => {
  //   const { value } = e.currentTarget;
  //   dispatch(filterContact(value));
  // };

  // useEffect(() => {
  //   dispatch(fetchContactsList());
  // }, [dispatch]);

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="App-header">
          <Suspense fallback={<h2>Loading ...</h2>}>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              <Route
                path="/"
                element={
                  <PublicRoute redirectTo={'/'}>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo={'/contacts'} restricted>
                    <LoginForm />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo={'/contacts'} restricted>
                    <RegisterForm />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo={'/login'}>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>

          {/* <Container title="Phonebook">
            <ContactForm createContact={createContact} />
          </Container>
          <Container title="Contacts">
            <Filter value={filter} onChange={changeFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDelete={handleDelete}
            ></ContactsList>
          </Container> */}
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
