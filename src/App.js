import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SideImage from './components/SideImage';
import Main from './components/Main';
import Admit from './components/Admit';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <SideImage />
      <SideNav />
      <TopNav />
      <Main />
       <Admit />
    
    </div>
  );
}

export default App;
