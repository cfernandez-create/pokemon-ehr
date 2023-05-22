import React, { useEffect, useState } from "react";
import pokemonOptions from "./pokemonOptions";
import CustomSelect from "react-select";
import { Stack, Button, Autocomplete, TextField } from "@mui/material/";
import Axios from "axios";
import { baseURL } from "../utils/constant";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.4375em",
    letterSpacing: "0.00938em",
    color: "rgba(0, 0, 0, 0.87)",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    width: "180%",
    borderRadius: "4px",
    paddingRight: "14px",
    padding: "1px",
  },
}));

const statusOptions = [
  { value: "fainted", label: "Fainted" },
  { value: "burned", label: "Burned" },
  { value: "frozen", label: "Frozen" },
  { value: "poisoned", label: "Poisoned" },
  { value: "asleep", label: "Asleep" },
  { value: "confused", label: "Confused" },
  { value: "paralyzed", label: "Paralyzed" },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "150px",
    maxHeight: "100px",
    overflowY: "auto",
    cursor: "pointer",
  }),
  option: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: "150px",
    maxHeight: "200px",
    overflowY: "auto",
    cursor: "pointer",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: "110px",
  }),
  menu: (styles) => ({
    ...styles,
    width: "150px",
    maxHeight: "100px",
    overflowY: "auto",
    pointerEvents: "auto",
  }),
};

export default function Admit(props) {
  const { handleClosePopup } = props;
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [trainer, setTrainer] = useState("");
  const [mrnumber, setMrNumber] = useState("");
  const [incrementingNumber, setIncrementingNumber] = useState(0);
  const [types, setTypes] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [matchedOption, setMatchedOption] = useState(null);
  const [number, setNumber] = useState(0);
  const [img, setImg] = useState("");

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const randomHp = getRandomNumber();

  const handleCancelButtonClick = () => {
    handleClosePopup();
  };

  const handleSpeciesChange = (event) => {
    const { value } = event.target;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setSpecies(capitalizedValue);

    const matched = pokemonOptions.find((pokemon) =>
      pokemon.label.includes(value)
    );

    if (matched) {
      setMatchedOption(matched);
      setTypes(matched.types);
      setHeight(matched.height);
      setWeight(matched.weight);
      setNumber(matched.number);
      setImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${matched.number}.png`
      );
    } else {
      setMatchedOption(null);
      setTypes("AS");
      setHeight("");
      setWeight("");
      setNumber(0);
      setImg("");
    }
  };

  const handleAutofill = () => {
    if (matchedOption) {
      setSpecies(matchedOption.label);
      setTypes(matchedOption.types);
      setHeight(matchedOption.height);
      setWeight(matchedOption.weight);
      setNumber(matchedOption.number);
      setImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${matchedOption.number}.png`
      );
    }
  };

  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption.label);
  };

  const addPokemon = () => {
    const pokemonData = {
      name: name,
      level: level,
      species: species,
      types: types,
      trainer: trainer,
      status: status,
      hp: randomHp,
      mrnumber: mrnumber,
      height: height,
      weight: weight,
      img: img,
    };

    console.log("Pokemon Data:", pokemonData);

    Axios.post(`${baseURL}/save`, { admits: pokemonData })
      .then(() => {
        console.log("Success!");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    const now = new Date();
    const timeInSeconds = String(now.getSeconds()).padStart(2, "0");

    setMrNumber(`P00${timeInSeconds}${incrementingNumber}`);
  }, [incrementingNumber]);

  useEffect(() => {
    setIncrementingNumber(
      (prevIncrementingNumber) => prevIncrementingNumber + 4
    );
  }, []);

  return (
    <div>
      <div className="admit-container">
        <div className="admit-label" id="admit-name">
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Pokemon's name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="admit-label" id="admit-lvl">
          <label>Lvl: </label>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="1-100"
            onChange={(event) => {
              setLevel(event.target.value);
            }}
          />
        </div>

        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pokemonOptions}
          value={pokemonOptions.label}
          onChange={handleSpeciesChange}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Species" />}
        /> */}

        <div>
          <div className="admit-label" id="admit-species">
            <label>Species: </label>
            <input
              type="text"
              value={species}
              onChange={handleSpeciesChange}
              onFocus={handleAutofill}
              placeholder="Search species..."
            />
          </div>

          <div className="suggestions">
            {filteredOptions.map((pokemon) => (
              <div key={pokemon.value}>{pokemon.label}</div>
            ))}
          </div>
        </div> 

        <div className="admit-label" id="admit-trainer">
          <label>Trainer Name: </label>
          <input
            type="text"
            placeholder="Trainer Name"
            onChange={(event) => {
              setTrainer(event.target.value);
            }}
          />
        </div>

        <div className="admit-status">
          <label>Status: </label>
          <CustomSelect
            options={statusOptions}
            styles={colourStyles}
            value={statusOptions.find((option) => option.value === status)}
            onChange={handleStatusChange}
          />
        </div>

        <div className="admit-buttons">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={addPokemon}>
              SUBMIT
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleCancelButtonClick}
            >
              CLOSE
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
