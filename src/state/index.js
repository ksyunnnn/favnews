import React from 'react';

const API_KEY = '3ba31e6d621748fdb00ec93c8f96ada7';

export const baseUrl = 'https://newsapi.org/v2/everything?'
          + 'sources=wired&'
          + `apiKey=${API_KEY}`;

export const ArticlesContext = React.createContext();
