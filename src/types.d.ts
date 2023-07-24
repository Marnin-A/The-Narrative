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
  publishedAt: string;
  content: string;
};
