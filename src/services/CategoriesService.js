import HttpClient from './utils/HttpClient';
import delay from '../utils/delay';

class CategoriesService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/categories?orderBy=${orderBy}`);

    await delay(500);

    return data;
  }
}

export default new CategoriesService();
