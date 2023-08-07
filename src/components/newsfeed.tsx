import React, { useState } from "react";
import LoadingImg from "../assets/loading2.webp";
import axios from "axios";
import BasicModal from "./Modal";
import Hero from "./Hero";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const [articles, setArticles] = React.useState<Array<article>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [didError, setDidError] = React.useState(false);
  const handleClose = () => setDidError(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchArticles = async () => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
    try {
      // Get data from API
      const response = await axios.get(url);
      const articles = response.data.articles;
      setArticles(response.data.articles);
      setIsLoading(false);
      console.log(articles);

      // Check length to detect possible error
      if (articles.length === 0) {
        setDidError(true);
      }
    } catch (error) {
      setDidError(true);
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <img src={LoadingImg} alt="" />
        <BasicModal open={didError} handleClose={handleClose} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Hero />
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {articles.map((details: article, key: article["id"]) => (
            <NewsCard details={details} key={key} />
          ))}
        </div>
        <BasicModal open={didError} handleClose={handleClose} />
      </div>
    );
  }
};

export default NewsFeed;
