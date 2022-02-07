import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Container } from '../Container/Container';
import { Filter } from '../Filter/Filter';
import {
  addContact,
  fetchContactsList,
  deleteContactsOps,
  filterContact,
} from '../../redux/contacts/actions';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const createContact = newContact => {
    const dublicateContact = contacts.some(checkedContact => {
      return (
        checkedContact.name.toLowerCase() === newContact.name.toLowerCase()
      );
    });

    if (dublicateContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDelete = contactId => {
    dispatch(deleteContactsOps(contactId));
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Container title="Phonebook">
        <ContactForm createContact={createContact} />
      </Container>
      <Container title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={handleDelete}
        ></ContactsList>
      </Container>
    </>
  );
}
