import React from 'react';

export default function Header({ selectedCardId, admitData}) {
  if (!admitData || admitData.length === 0) {
    return <div className="header">Loading..</div>; 
  }

  const selectedCard = admitData.find((item) => item._id === selectedCardId);

  if (!selectedCard) {
    return <div className="header">Loading...</div>; 
  }

  
  return (
    <div>
      <div className='header' key={selectedCard._id}>
        <div className='header-container'>
          <h3 className='name-header'>{selectedCard.name}</h3>
          <h3 className='lvl-header'>Lvl. {selectedCard.level}</h3>
        </div>
        <div className="small-text-container">
          <div className='small-text-left'>
            <p className='smallText'>Species: {selectedCard.species}</p>
            <p className='smallText'>Trainer: {selectedCard.trainer}</p>
            <p className='smallText'>MRN: {selectedCard.mrnumber}</p>
          </div>
          <div className='small-text-right'>
            <p className='smallText'>Type: {selectedCard.types}</p>
            <p className='smallText'>Height (ft): {selectedCard.height}</p>
            <p className='smallText'>Weight (lbs): {selectedCard.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
