import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  async list(signal, orderBy = 'asc') {
    const { data } = await HttpClient.get(`/categories?orderBy=${orderBy}`, { signal });

    return data.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
