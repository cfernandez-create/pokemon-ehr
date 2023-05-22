import React, { useState, useRef, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';


const Pokecard = ({ setAdmitData, index, handleCardClick, }) => {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);

  const handleClick = () => {
    setIsSelected(!isSelected);
    handleCardClick();
  };
  
  const handleOutsideClick = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
    <div ref={cardRef} className={`card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
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
              setAdmitData.status.toLowerCase() === 'burned'
                ? '#F08030'
                : setAdmitData.status.toLowerCase() === 'paralyzed'
                ? '#F8D030'
                : setAdmitData.status.toLowerCase() === 'fainted'
                ? '#E1E1E1'
                : setAdmitData.status.toLowerCase() === 'frozen'
                ? '#98D8D8'
                : setAdmitData.status.toLowerCase() === 'poisoned'
                ? '#A040A0'
                : setAdmitData.status.toLowerCase() === 'asleep'
                ? '#A890F0'
                : setAdmitData.status.toLowerCase() === 'confused'
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
