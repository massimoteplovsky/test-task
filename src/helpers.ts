import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IArticle } from './types/article';

export const truncateText = (text: string, num: number): string => {
  return num > text.length ? text : text.slice(0, num) + '...';
};

export const formatDate = (date: string): string => {
  return format(new Date(date), 'dd MMMM u', { locale: ru });
};

export const formatFilterDate = (date: string): string => {
  return format(new Date(date), 'dd MM u');
};

export const validateArticles = (articles: IArticle[]) => {
  return articles.map((article) => {
    if (!article.author) {
      article.author = '';
    }
    return article;
  });
};
