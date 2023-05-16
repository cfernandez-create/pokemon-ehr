import React, { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { fetchAdmitData } from './Fetch';
import Pokecard from './Pokecard'

export default function Main() {
 const [admitData, setAdmitData] = useState([]);

  useEffect(() => {
    fetchAdmitData(setAdmitData);
  }, []);

  if (admitData === null) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className="main-container">
      <div className="main-top-bar">
        <div className="main-radio">
        </div>
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
          <Pokecard setAdmitData={item} key={index}/>
        ))}
      </div>
    </div>
  );
}

