import axios from 'axios';

export async function postContact(contact) {
  const responce = await axios.post(`/contacts`, contact);
  return responce;
}

export async function deleteContact(contactId) {
  const responce = await axios.delete(`/contacts/${contactId}`);
  return responce;
}

export async function fetchContact() {
  const responce = await axios.get('/contacts');
  return responce;
}
