import { FC } from 'react';
import { IArticle } from '../types/article';
import { formatDate } from '../helpers';

const Card: FC<{
  article: IArticle;
}> = ({ article }) => {
  const { title, author, description, publishedAt } = article;
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <div className="card__content">
        <p className="card__text">{description}</p>
        <div className="card__info">
          <span className="card__info-item card__info-item--black ">
            {author ? author : 'N/A'}
          </span>
          <span className="card__info-item card__info-date">
            {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
