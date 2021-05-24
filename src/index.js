import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './normalize.css';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {typeDefs, GET_SINGLE_ALBUM} from './queries';
import {favoritesVar} from './cache';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri:'https://pure-hollows-05817.herokuapp.com/https://tranquil-depths-91575.herokuapp.com/graphql',
  cache: cache,
  connectToDevTools: true,
  typeDefs
  // typePolicies: {
  //   Album: {
  //     fields: {
  //       isFavorite() {
  //         return false;
  //       }
  //       isFavorite: {
  //         read(isFavorite = false) {
  //           return isFavorite;
  //         }
  //       }
  //     }
  //   }
  // }
})

cache.writeQuery({
  query: GET_SINGLE_ALBUM,
  data: {
    isFavorite: false
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>  
  ,
  document.getElementById('root')
);

reportWebVitals();
