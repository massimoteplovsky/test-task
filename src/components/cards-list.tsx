import { FC } from 'react';
import { IArticle } from '../types/article';

import Card from './card';

const CardsList: FC<{ articles: IArticle[] }> = ({ articles }) => {
  if (!articles.length) {
    return (
      <div className="container">
        <div className="cards-list cards-list--empty">
          <h1 className="cards-list__title">Статьи не найдены</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="cards-list">
        {articles.map((article, index) => (
          <Card key={`${article.title}-${index}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
