import React from 'react';
import './App.css';
import Header from './components/Header'
import ItemBox from './components/ItemBox';
import SideBarLeft from './components/SideBarLeft';
import QueryBar from './components/QueryBar'


function App() {
  return (
    <div className="App">
      <Header />
      <SideBarLeft />
      <QueryBar />
      <div className='productInfo'>
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </div>
    </div>
  );
}

export default App;
