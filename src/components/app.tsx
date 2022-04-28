import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import ArticleService from '../services/article-service';
import { ArticlesContext, ArticlesContextType } from '../context';
import { validateArticles } from '../helpers';

import Loader from '../components/loader';
import Home from '../pages/home';

const App = () => {
  const { saveArticles, saveFilterDate } = useContext(
    ArticlesContext
  ) as ArticlesContextType;
  const {
    isLoading,
    isSuccess,
    isError,

    data: articles = [],
  } = useQuery(
    'Get all posts',
    () => {
      return ArticleService.getAllArticles();
    },
    {
      select: ({ data }) => validateArticles(data.articles),
    }
  );

  useEffect(() => {
    if (isSuccess) {
      saveArticles(articles);
      saveFilterDate(articles);
    }
  }, [articles, isSuccess, saveArticles, saveFilterDate]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Oшибка</div>;
  }
  return <Home />;
};

export default App;
