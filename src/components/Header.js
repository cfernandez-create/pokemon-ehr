import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
  const [admitData, setAdmitData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/admitdata')
      .then(response => {
        setAdmitData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
              <p className='smallText'>Species: Charmander</p>
              <p className='smallText'>Trainer: {item.trainer}</p>
              <p className='smallText'>MRN: {item.mrnumber}</p>
            </div>
            <div className='small-text-right'>
              <p className='smallText'>Type: Fire</p>
              <p className='smallText'>Height (ft): 3′04″</p>
              <p className='smallText'>Weight (lbs): 25.2</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
