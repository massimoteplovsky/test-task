export interface IArticle {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticlesResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
