import React from 'react';

export default function SideImage({ selectedCardId, admitData, }) {
  if (!admitData || admitData.length === 0) {
    return <div className='SideImageContainer'>Loading...</div>;
  }

  const selectedCard = admitData.find((item) => item._id === selectedCardId);

  
  return (
    <div>
      <div className='SideImageContainer' key={selectedCard._id}>
      <div className="side-image">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="Side"/>
      </div>
        </div>
      </div>
  
  );
}
