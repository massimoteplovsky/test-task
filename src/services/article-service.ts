import { api } from '../api';
import { IArticlesResponse } from '../types/article';

const ArticleService = {
  async getAllArticles() {
    return await api.get<IArticlesResponse>('');
  },
};

export default ArticleService;
