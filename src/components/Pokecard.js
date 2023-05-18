import React, { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Axios from 'axios';

const Pokecard = ({ setAdmitData, index, handleCardClick, }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    handleCardClick();
    console.log('Selected card ID: ', index);
  };
  

  function getProgressBarColor(completed) {
    if (completed >= 0 && completed <= 30) {
      return 'red';
    } else if (completed > 30 && completed <= 60) {
      return 'orange';
    } else if (completed > 60 && completed <= 100) {
      return 'green';
    }

    return 'gray';
  }

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      <div className="card-image">
        <img src={setAdmitData.img} alt="Pokemon" className="poke-img"/>
      </div>
      <div className="card-name">
        <p className="smallText">Name: {setAdmitData.name}</p>
        <p className="smallText">Trainer: {setAdmitData.trainer}</p>
        <p className="smallText">MRN: {setAdmitData.mrnumber}</p>
      </div>
      <div className="card-hp">
        <ProgressBar
          completed={setAdmitData.hp}
          bgColor={getProgressBarColor(setAdmitData.hp)}
          isLabelVisible={false}
          className="wrapper"
        />
      </div>
      <div className="card-status">
        <p
          className="burnStatus"
          style={{
            backgroundColor:
              setAdmitData.status === 'burned'
                ? '#F08030'
                : setAdmitData.status === 'paralyzed'
                ? '#F8D030'
                : setAdmitData.status === 'fainted'
                ? '#E1E1E1'
                : setAdmitData.status === 'frozen'
                ? '#98D8D8'
                : setAdmitData.status === 'poisoned'
                ? '#A040A0'
                : setAdmitData.status === 'asleep'
                ? '#A890F0'
                : setAdmitData.status === 'confused'
                ? '#F85888'
                : '',
          }}
        >
          {setAdmitData.status.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Pokecard;
