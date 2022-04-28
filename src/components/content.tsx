import Filter from './filter';
import CardsList from './cards-list';
import { useContext } from 'react';
import { ArticlesContext, ArticlesContextType } from '../context';

const Content = () => {
  const { articles, filteredArticles } = useContext(
    ArticlesContext
  ) as ArticlesContextType;

  if (!articles.length) {
    return (
      <section className="content">
        <h1 className="content__title">Статей пока нет</h1>
      </section>
    );
  }

  return (
    <section className="content">
      <Filter />
      <CardsList articles={filteredArticles} />
    </section>
  );
};

export default Content;
