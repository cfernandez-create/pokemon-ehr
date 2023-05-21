import React, { useEffect, useState } from "react";
import pokemonOptions from "./pokemonOptions";
import "../Admit.css";
import CustomSelect from "react-select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Axios from "axios";
import { baseURL } from "../utils/constant";

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
    width: "130px",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  option: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: "110px",
    maxHeight: "200px",
    overflowY: "auto",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: "110px",
  }),
  menu: (styles) => ({
    ...styles,
    width: "50%",
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
  const [isAdmitContainerVisible, setAdmitContainerVisible] = useState(true);

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
      pokemon.label.toLowerCase().includes(value.toLowerCase())
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
      setTypes("");
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

  const hideAdmitContainer = () => {
    setAdmitContainerVisible(false);
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
        window.location.reload()
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
      (prevIncrementingNumber) => prevIncrementingNumber + 1
    );
  }, []);

  return (
    <div>
      {isAdmitContainerVisible && (
        <div
          className={`Admit ${isAdmitContainerVisible ? "visible" : "hidden"}`}
        >
          <div className="admit-container">
            <div className="admit-name">
              <label>Name: </label>
              <input
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="admit-lvl">
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

            <div className="admit-spieces">
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

            <div className="admit-trainer">
              <label>Trainer Name: </label>
              <input
                type="text"
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
                <Button
                  variant="contained"
                  color="success"
                  onClick={addPokemon}
                >
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
      )}
    </div>
  );
}
