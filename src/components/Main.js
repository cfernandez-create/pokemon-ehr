import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function Main() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
            <RadioGroup value={selectedOption} onClick={handleClick} className="main-radio">
              <FormControlLabel value="option1" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </div>
      <div className="main-name">
        <p>Name</p>
      </div>
      </div>
    </div>
  );
}