import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql
,HttpLink,from } from '@apollo/client';

const link=from([
  new HttpLink
  ({uri:"http://localhost:6969/graphql"})
])
const client = new ApolloClient({
 link:link,
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      query {getAllUsers{
        first_name
        last_name
        email
        gender
        id
      }}
    `,
  })
  .then((result) => console.log(result.data.getAllUsers));

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}><App/></ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
