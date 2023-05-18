// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import SideImage from './components/SideImage';
import Main from './components/Main';



function App() {
  
  return (
    <div className="App">
      <Header />
      <SideImage />
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
