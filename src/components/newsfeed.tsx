import React, { useState } from "react";
import axios from "axios";
import BasicModal from "./Modal";
import Hero from "./Hero";

const NewsFeed = () => {
  const [articles, setArticles] = React.useState<Array<article>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [didError, setDidError] = React.useState(false);
  const handleClose = () => setDidError(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchArticles = async () => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
    try {
      const response = await axios.get(url);
      const articles = response.data.articles;
      setArticles(response.data.articles);
      // console.log(response);
      console.log(articles);
      if (articles.length === 0) {
        setDidError(true);
      }
    } catch (error) {
      setDidError(true);
      console.error(error);
    }
    setIsLoading(false);
  };
  React.useEffect(() => {
    fetchArticles();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log(articles);
    const heroImage = articles[0].urlToImage;
    return (
      <div>
        <div>{articles && <Hero heroImg={heroImage} />}</div>
        <div>
          {articles.map((article: article, key: article["id"]) => (
            <div key={key}>
              {/* {article.urlToImage && CheckForVideo(article.urlToImage)} */}
              <img
                className="w-full"
                src={article.urlToImage}
                loading="lazy"
                alt={article.title}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Source: {article.source.name}</p>
            </div>
          ))}
        </div>
        <BasicModal open={didError} handleClose={handleClose} />
      </div>
    );
  }
};

export default NewsFeed;

// Check the the last 3 characters of the url to
// determine if the article has a video attached
function CheckForVideo(url: string): boolean {
  const length: number = url.length;
  console.log(url.slice(length - 3, length));
  if (url.slice(length - 3, length) === "mp4") {
    console.log("video");
    return true;
  } else {
    return false;
  }
}
