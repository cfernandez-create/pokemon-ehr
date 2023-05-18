import React from 'react';

export default function Header({ selectedCardId, admitData}) {
  if (!admitData || admitData.length === 0) {
    return <div className="header">Loading..</div>; 
  }

  const selectedCard = admitData.find((item) => item.id === selectedCardId);

  if (!selectedCard) {
    return <div className="header">Loading...</div>; 
  }

  
  return (
    <div>
      <div className='header' key={selectedCard.id}>
        <div className='header-container'>
          <h3 className='name-header'>{selectedCard.name}</h3>
          <span className='maletag' style={{ color: 'blue' }}>♂</span>
          <h3 className='lvl-header'>Lvl. {selectedCard.level}</h3>
        </div>
        <div className="small-text-container">
          <div className='small-text-left'>
            <p className='smallText'>Species: {selectedCard.species}</p>
            <p className='smallText'>Trainer: {selectedCard.trainer}</p>
            <p className='smallText'>MRN: {selectedCard.mrnumber}</p>
          </div>
          <div className='small-text-right'>
            <p className='smallText'>Type: {selectedCard.type}</p>
            <p className='smallText'>Height (ft): 1′04″</p>
            <p className='smallText'>Weight (lbs): 13.2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
