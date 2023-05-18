import React, { useState } from 'react';
import pokemonOptions from './pokemonOptions';
import '../Admit.css';
import CustomSelect from 'react-select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const statusOptions = [
  { value: 'fainted', label: 'Fainted' },
  { value: 'burned', label: 'Burned' },
  { value: 'frozen', label: 'Frozen' },
  { value: 'poisoned', label: 'Poisoned' },
  { value: 'asleep', label: 'Asleep' },
  { value: 'confused', label: 'Confused' },
  { value: 'paralyzed', label: 'Paralyzed' },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    width: '130px'
  }),
  option: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: '110px'
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: '110px'
  }),
  menu: (styles) => ({
    ...styles,
    width:'50%'
  })
};



export default function Admit() {
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleSpeciesChange = (event) => {
    const { value } = event.target;
    setSpecies(value);
    filterOptions(value);
  };

  const filterOptions = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredOptions([]);
    } else {
      const filtered = pokemonOptions.filter(
        (pokemon) =>
          pokemon.label.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };



  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption.value);
  }

  return (
    <div className="Admit">
      <div className='admit-container'>
      <div className='admit-name'><label>Name: </label>
      <input type="text" /></div>

      <div className='admit-lvl'><label>Lvl: </label>
      <input type="number" min="1" max="100"/></div>

      <div className='admit-spieces'>
      <label>Species: </label>
      <input
        type="text"
        value={species}
        onChange={handleSpeciesChange}
        placeholder="Search species..."
      /></div>

      <div className="suggestions">
        {filteredOptions.map((pokemon) => (
          <div key={pokemon.value}>{pokemon.label}</div>
        ))}
      </div>

      <div className='admit-trainer'><label>Trainer Name: </label>
      <input type="text" /></div>
  
      <div className='admit-status'>
      <label>Status: </label>
      <CustomSelect
        options={statusOptions}
        styles={colourStyles}
        value={statusOptions.find((option) => option.value === status)}
        onChange={handleStatusChange}
        /></div>



    <div className='admit-buttons'>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        SUBMIT
      </Button>
      <Button variant="outlined" color="error">
        CLOSE
      </Button>
    </Stack>
    </div>

</div>
    </div>
  );
}
