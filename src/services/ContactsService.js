import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils/HttpClient';

class ContactsService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/contacts?orderBy=${orderBy}`);

    return data.map(ContactMapper.toDomain);
  }

  async get(id) {
    const { data } = await HttpClient.get(`/contacts/${id}`);

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
