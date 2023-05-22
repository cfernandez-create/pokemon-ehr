import React, { useState, useEffect } from 'react';
import Pokecard from './Pokecard'
import Header from './Header';
import SideImage from './SideImage';
import TopNav from './TopNav';
import Popup from './Popup';
import axios from 'axios';
import { baseURL } from "../utils/constant";

export default function Main() {
  const [openPopup, setOpenPopup] = useState(false);
  const [admitData, setAdmitData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);
 
  
  useEffect(() => {
   axios.get(`${baseURL}/get`).then((res) => {
    console.log(res.data);
    setAdmitData(res.data)
   });
  }, []);

  const deleteAdmit = (_id) => {
    return axios.delete(`${baseURL}/delete/${_id}`).then((res)=> {
      console.log(res);
      return res.data; 
    });
  }


  const handleDeleteAdmitData = (_id) => {
    deleteAdmit(_id).then(handleDeleteSuccess)
    .catch(handleDeleteError);
  };

  const handleDeleteSuccess = (data) => {
    console.log('Record deleted:', data);
    window.location.reload()
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
              key={item._id}
              index={item._id}
              handleCardClick={() => handleCardClick(item._id, item)}
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
