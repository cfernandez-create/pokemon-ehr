import React, { useState, useEffect } from 'react';
import { fetchAdmitData } from './Fetch';
import { deleteAdmitData } from './Delete';
import Pokecard from './Pokecard'
import Header from './Header';
import SideImage from './SideImage';
import TopNav from './TopNav';
import Popup from './Popup';

export default function Main() {
  const [openPopup, setOpenPopup] = useState(false);
  const [admitData, setAdmitData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);

  useEffect(() => {
    fetchAdmitData(setAdmitData);
  }, []);

  const handleDeleteAdmitData = (id) => {
    deleteAdmitData(id, handleDeleteSuccess, handleDeleteError);
  };

  const handleDeleteSuccess = (data) => {
    console.log('Record deleted:', data);
  };

  const handleDeleteError = (error) => {
    console.error('An error occurred while deleting:', error);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleCardClick = (id, data) => {
    setSelectedCardId(id);
    setSelectedCardData(data);
    console.log('Selected card ID:', id);
  };

  if (admitData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      <TopNav handleOpenPopup={handleOpenPopup} handleDeleteAdmitData={handleDeleteAdmitData} selectedCardId={selectedCardId}/>
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
              key={item.id}
              index={item.id}
              handleCardClick={() => handleCardClick(item.id, item)}
            />
          ))}
        </div>

        {selectedCardId !== null && (
          <Header
            selectedCardId={selectedCardId}
            admitData={admitData}
            selectedCardData={selectedCardData}
          />
        )}

        {selectedCardId !== null && (
          <SideImage
            selectedCardId={selectedCardId}
            admitData={admitData}
            selectedCardData={selectedCardData}
          />
        )}
      </div>
    </div>
  );
}
