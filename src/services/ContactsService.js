import HttpClient from './utils/HttpClient';
import delay from '../utils/delay';

class ContactsService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/contacts?orderBy=${orderBy}`);

    await delay(500);

    return data;
  }

  async create(contact) {
    const { data } = await HttpClient.post('/contacts', contact);

    await delay(500);

    return data;
  }

  async update(contact) {
    const { data } = await HttpClient.put(`/contacts/${contact.id}`, contact);

    await delay(500);

    return data;
  }

  async delete(id) {
    const { data } = await HttpClient.delete(`/contacts/${id}`);

    await delay(500);

    return data;
  }
}

export default new ContactsService();
