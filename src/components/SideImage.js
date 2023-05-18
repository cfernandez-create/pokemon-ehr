import React from 'react';

export default function SideImage({ selectedCardId, admitData }) {
  if (!admitData) {
    return <div className='SideImageContainer'>Loading..</div>;
  }

  const selectedCard = admitData.find((item) => item.id === selectedCardId);

  if (!selectedCard) {
    return <div className='SideImageContainer'>Loading.....</div>;
  }


  console.log(selectedCard.img);
  return (
    <div>
      <div className='SideImageContainer' key={selectedCard.id}>
      <div className="card-image">
      <img src= {selectedCard.img}/></div>
        </div>
      </div>
  
  );
}
