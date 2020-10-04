import React from 'react';
import './App.css';
import  Header from './components/Header';
import ItemHeader from './components/ItemHeader';
import ItemBox from './components/ItemBox';
import SideBarLeft from './components/SideBarLeft';
import QueryBar from './components/QueryBar';
import { ApolloClient, InMemoryCache } from '@apollo/client';



function App() {
  let items = [];
  for (let i=0;i<2;i++) {
    items.push(<ItemBox />);
  }

  return (
    <div className="App">
      <Header />
      <SideBarLeft />
      <QueryBar />
      <div className='productInfo'>
       <ItemHeader />
       {items}
      </div>
    </div>
  );
}

export default App;
