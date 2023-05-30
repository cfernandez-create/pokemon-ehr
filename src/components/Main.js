import React, { useState, useEffect } from 'react';
import Pokecard from './Pokecard';
import Header from './Header';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Popup from './Popup';
import { baseURL } from "../utils/constant";
import {fetchData} from "../functions/fetchData"
import {handleCardClick} from "../functions/handleCardClick"


export default function Main() {
  const [openPopup, setOpenPopup] = useState(false);
  const [admitData, setAdmitData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);


  useEffect (() => {
    fetchData(baseURL, setAdmitData);
  }, []);
  
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };


  if (admitData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      <TopNav
        handleOpenPopup={handleOpenPopup}
        selectedCardId={selectedCardId}
      />
       <SideNav
        handleOpenPopup={handleOpenPopup}
        selectedCardId={selectedCardId}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} handleClosePopup={handleClosePopup} />
      <div className="main-container">
        <div className="main-top-bar">
          <div className="main-name">
            <p>Pokemon</p>
          </div>
          <div className="main-hp-text">
            <p>HP</p>
          </div>
          <div className="main-status-text">
            <p>Status</p>
          </div>
        </div>

        <div className="pokemon-container">
          {admitData.map((item, index) => (
            <Pokecard
              setAdmitData={item}
              key={item._id}
              index={item._id}
              handleCardClick={() => handleCardClick(item._id, item, setSelectedCardId, setSelectedCardData)}
            />
          ))}
        </div>
          <Header
            selectedCardId={selectedCardId}
            admitData={admitData}
            selectedCardData={selectedCardData}
          />
        
      </div>
    </div>
  );
}



