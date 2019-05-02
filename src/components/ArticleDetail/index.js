import React from 'react';

import { ArticlesContext } from '../../state';

export default ({ match }) => (
  <ArticlesContext.Consumer>
    {(articles) => {
      const article = articles.find(v => (v.title === match.params.title));
      return (article && <span>{article.content}</span>);
    }}
  </ArticlesContext.Consumer>
);
