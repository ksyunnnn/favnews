import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { baseUrl, ArticlesContext } from './state';
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';

const Main = styled.main`
  padding: 16px;
`;

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
      <AppBar position="static" color="default">
        <Toolbar>
        Articles
        </Toolbar>
      </AppBar>
      <Main>
        <Router>
          <Route exact path="/" component={ArticleList} />
          <Route path="/article/:title" component={ArticleDetail} />
        </Router>
      </Main>
    </ArticlesContext.Provider>
  );
};
