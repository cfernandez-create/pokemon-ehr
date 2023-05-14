import React, { useState } from 'react';
import { FormControl, Radio } from '@mui/material';
import ProgressBar from "@ramonak/react-progress-bar";

export default function Main() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedOption === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleClick = (event) => {
    if (event.target.value === selectedOption) {
      setSelectedOption('');
    } else {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <div className="main-container">
      <div className="main-top-bar">
        <div className="main-radio">
          <FormControl component="fieldset">
            <Radio value={selectedOption} onClick={handleClick} 
            className="main-radio" {...controlProps('a')} size="small" />
          </FormControl>
        </div>
      <div className="main-name">
        <p>Name</p>
      </div>
      <div className="main-hp-text">
      <p>HP</p>
      </div>
      <div className="main-status-text">
      <p>STATUS</p>
      </div>
      </div>
      <div className="pokemon-container">

      <div className="main-radio">
          <FormControl component="fieldset">
            <Radio value={selectedOption} onClick={handleClick} 
            className="main-radio" {...controlProps('a')} size="small" />
          </FormControl>
        </div>

      <div className='small-text-main'>
            <p className='smallText'>Species: Pikachu</p>
            <p className='smallText'>Trainer: TRNR John</p>
            <p className='smallText'>MRN: P000002500</p>
                    
      </div>
      <div className="main-hp">
      <ProgressBar completed = {30} bgColor = "red" isLabelVisible = {false} />
      </div>
      <div className="status">
            <p className='burn-status'>BURN</p>
      </div>
      </div>

    </div>
  );
}