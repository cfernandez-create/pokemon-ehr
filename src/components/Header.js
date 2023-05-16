import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchAdmitData } from './Fetch'

export default function Header() {
const [admitData, setAdmitData] = useState(null);

  useEffect(() => {
    fetchAdmitData(setAdmitData);
  }, []);


  if (admitData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {admitData.map(item => (
        <div className='header' key={item.id}>
          <div className='header-container'>
            <h3 className='name-header'>{item.name}</h3>
            <span className='maletag' style={{ color: 'blue' }}>♂</span>
            <h3 className='lvl-header'>Lvl. {item.level}</h3>
          </div>
          <div className="small-text-container">
            <div className='small-text-left'>
              <p className='smallText'>Species: {item.species}</p>
              <p className='smallText'>Trainer: {item.trainer}</p>
              <p className='smallText'>MRN: {item.mrnumber}</p>
            </div>
            <div className='small-text-right'>
              <p className='smallText'>Type: {item.type}</p>
              <p className='smallText'>Height (ft): 1′04″</p>
              <p className='smallText'>Weight (lbs): 13.2</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
