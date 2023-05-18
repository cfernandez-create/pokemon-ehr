import React, { useState, useEffect } from 'react';
import { fetchAdmitData } from './Fetch';
import Pokecard from './Pokecard'
import Header from './Header';
import SideImage from './SideImage';
import Admit from './Admit';
import TopNav from './TopNav'


export default function Main() {
  
 const [admitData, setAdmitData] = useState([]);
 const [selectedCardId, setSelectedCardId] = useState(null);
 const [selectedCardData, setSelectedCardData] = useState(null);

 

  useEffect(() => {
    fetchAdmitData(setAdmitData);
  }, []);

  const handleCardClick = (id,data) => {
    setSelectedCardId(id);
    setSelectedCardData(data);
    console.log('Selected card ID:', id);
  };

  if (admitData === null) {
    return <div>Loading...</div>;
  }

  
  return (
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
      <Pokecard setAdmitData={item} 
          key={item.id} 
          index={item.id} 
          handleCardClick={()=> handleCardClick(item.id, item)}/>
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
  );
}

