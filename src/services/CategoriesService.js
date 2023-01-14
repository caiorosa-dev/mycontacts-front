import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  async list(orderBy = 'asc') {
    const { data } = await HttpClient.get(`/categories?orderBy=${orderBy}`);

    return data.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
