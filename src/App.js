import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { baseUrl, ArticlesContext } from './state';
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';

export default () => {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => fetch(baseUrl)
    .then((response) => {
      response.json().then(value => setArticles(value.articles));
    });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ArticlesContext.Provider value={articles}>
      <Router>
        <Route exact path="/" component={ArticleList} />
        <Route path="/article/:title" component={ArticleDetail} />
      </Router>
    </ArticlesContext.Provider>
  );
};
