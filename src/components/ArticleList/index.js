import React from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../state';
import ArticleCard from '../ArticleCard';

export default () => (
  <ArticlesContext.Consumer>
    {articles => articles.map(article => <ArticleCard article={article} />)}
  </ArticlesContext.Consumer>
);
