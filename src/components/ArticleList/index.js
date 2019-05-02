import React from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../state';

export default () => (
  <ArticlesContext.Consumer>
    {articles => articles.map(v => <li><Link to={`/article/${v.title}`}>{v.title}</Link></li>)}
  </ArticlesContext.Consumer>
);
