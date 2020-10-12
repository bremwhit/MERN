import React from 'react';
import './App.css';
import  Header from './components/Header';
import ItemHeader from './components/ItemHeader';
import ItemBox from './components/ItemBox';
import SideBarLeft from './components/SideBarLeft';
import QueryBar from './components/QueryBar';
import gqlQueries from './graphQL/testQueries';
import {ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';
//Apollo Client setup imports: ApolloClient, InMemoryCache, gql
//General Apollo use imports: gql, ApolloProvider, useQuery

//Test ApolloClient connects to test db
const GQLclient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

//Test GraphQL query
GQLclient.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `
}).then(result => console.log("1.  " + result));



export class App extends React.Component {
  
  render() {
    //creating all item boxes to be pushed into the app
    let itemBoxes = [];
    for (let i=0;i<2;i++) {
      itemBoxes.push(<ItemBox />);
    }
    
    var queries = new gqlQueries();
    var {loading, error, data } = useQuery(queries.GET_RATES);
    if(loading) { console.log('Loading...'); }
    if(error) { console.log(`Error ${error.message}`); }
    else { console.log(data);}

    return (
    <ApolloProvider client={GQLclient}>
      <div className="App">
        <Header />
        <SideBarLeft />
        <QueryBar />
        <div className='productInfo'>
          <ItemHeader />
          {itemBoxes}
        </div>
      </div>
    </ApolloProvider>
    );
}
}

// function App(props:object) {


//   return (
//     <ApolloProvider client={client}>
//       <div className="App">
//         <Header />
//         <SideBarLeft />
//         <QueryBar />
//         <div className='productInfo'>
//         <ItemHeader />
//         {itemBoxes}
//         </div>
//       </div>
//     </ApolloProvider>
//   );
// }

export default App;
