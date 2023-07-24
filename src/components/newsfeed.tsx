import React from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = React.useState<Array<article>>([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  React.useEffect(() => {
    const fetchArticles = async () => {
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article: article) => (
        <div key={article.id}>
          <img src={article.urlToImage} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Source: {article.source.name}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
