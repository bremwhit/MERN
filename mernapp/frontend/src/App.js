import React from 'react';
import './App.css';
import ItemBox from './components/ItemBox';
import SideBarLeft from './components/SideBarLeft';


function App() {
  return (
    <div className="App">
      <SideBarLeft />
      <ItemBox />
    </div>
  );
}

export default App;
