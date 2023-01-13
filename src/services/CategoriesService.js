import HttpClient from './utils/HttpClient';

class CategoriesService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/categories?orderBy=${orderBy}`);

    return data;
  }
}

export default new CategoriesService();
