type source = {
  id: number | null;
  name: string;
};
type article = {
  id: React.Key;
  source: source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  urlToVideo?: string | undefined;
  publishedAt: string;
  content: string;
};

type NewsProp = {
  details: article;
  key: article["id"];
};
