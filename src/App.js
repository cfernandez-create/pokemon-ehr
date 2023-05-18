// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SideImage from './components/SideImage';
import Main from './components/Main';
import Popup from './components/Popup';


function App() {
  const [openPopup, setOpenPopup] = useState(false);

  const handleDeletePokemon = (id) => {
    console.log(`Delete Pokemon with ID: ${id}`);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="App">
      <Header />
      <SideImage />
      <SideNav />
      <TopNav handleOpenPopup={handleOpenPopup} handleDeletePokemon={handleDeletePokemon} />
      <Main />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} handleClosePopup={handleClosePopup} />
    </div>
  );
}

export default App;
