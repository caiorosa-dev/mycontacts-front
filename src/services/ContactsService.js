import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils/HttpClient';

class ContactsService {
  async list(signal, orderBy = 'asc') {
    const { data } = await HttpClient.get(`/contacts?orderBy=${orderBy}`, { signal });

    return data.map(ContactMapper.toDomain);
  }

  async get(id, signal) {
    const { data } = await HttpClient.get(`/contacts/${id}`, { signal });

    return ContactMapper.toDomain(data);
  }

  async create(contact) {
    const { data } = await HttpClient.post('/contacts', ContactMapper.toPersistence(contact));

    return ContactMapper.toDomain(data);
  }

  async update(id, contact) {
    const { data } = await HttpClient.put(`/contacts/${id}`, ContactMapper.toPersistence(contact));

    return data;
  }

  async delete(id) {
    const { data } = await HttpClient.delete(`/contacts/${id}`);

    return data;
  }
}

export default new ContactsService();
