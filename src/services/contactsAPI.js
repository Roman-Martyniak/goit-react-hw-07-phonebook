import axios from 'axios';


axios.defaults.baseURL = 'https://646b66397d3c1cae4ce3be7d.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts')
  return data;
}


export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
