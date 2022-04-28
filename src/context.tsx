import { FC, ReactNode, createContext, useState, useCallback } from 'react';
import { compareAsc, format, isSameDay, isAfter, isBefore } from 'date-fns';
import { IArticle } from './types/article';
import { IFilter } from './types/filter';

export type ArticlesContextType = {
  articles: IArticle[];
  filteredArticles: IArticle[];
  filterDate: {
    from: string;
    till: string;
  };
  saveFilterDate: (articles: IArticle[]) => void;
  saveArticles: (articles: IArticle[]) => void;
  filterArticles: (filter: IFilter) => void;
};

export const ArticlesContext = createContext<ArticlesContextType | null>(null);

const ArticleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<IArticle[]>([]);
  const [filterDate, setFilterDate] = useState({
    from: '',
    till: '',
  });

  const saveFilterDate = useCallback((articles: IArticle[]) => {
    const dates = articles
      .map(({ publishedAt }) => new Date(publishedAt))
      .sort(compareAsc);

    setFilterDate({
      from: format(new Date(dates[0]), 'u-MM-dd'),
      till: format(new Date(dates[dates.length - 1]), 'u-MM-dd'),
    });
  }, []);

  const saveArticles = useCallback((articles: IArticle[]) => {
    setArticles(articles);
    setFilteredArticles(articles);
  }, []);

  const filterArticles = useCallback(
    (filter: IFilter) => {
      const { author: authorName, from, till } = filter;
      const reg = new RegExp(authorName, 'gi');
      const newFilteredArticles = articles.filter(({ author, publishedAt }) => {
        return (
          reg.test(author) &&
          (isSameDay(new Date(from), new Date(publishedAt)) ||
            isAfter(new Date(publishedAt), new Date(from))) &&
          (isSameDay(new Date(till), new Date(publishedAt)) ||
            isBefore(new Date(publishedAt), new Date(till)))
        );
      });

      setFilteredArticles(newFilteredArticles);
    },
    [articles]
  );

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        filteredArticles,
        filterDate,
        saveFilterDate,
        saveArticles,
        filterArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticleProvider;
