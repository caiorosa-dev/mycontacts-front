import HttpClient from './utils/HttpClient';

class ContactsService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/contacts?orderBy=${orderBy}`);

    return data;
  }

  async get(id) {
    const { data } = await HttpClient.get(`/contacts/${id}`);

    return data;
  }

  async create(contact) {
    const { data } = await HttpClient.post('/contacts', contact);

    return data;
  }

  async update(contact) {
    const { data } = await HttpClient.put(`/contacts/${contact.id}`, contact);

    return data;
  }

  async delete(id) {
    const { data } = await HttpClient.delete(`/contacts/${id}`);

    return data;
  }
}

export default new ContactsService();
