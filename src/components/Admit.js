import React, { useEffect, useState } from "react";
import pokemonOptions from "./pokemonOptions";
import CustomSelect from "react-select";
import { Stack, Button } from "@mui/material/";
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
    width: "180px",
    maxHeight: "100px",
    overflowY: "auto",
    cursor: "pointer",
  }),
  option: (styles, { data }) => ({
    ...styles,
    color: data.color,
    width: "180px",
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
    width: "180px",
    maxHeight: "100px",
    overflowY: "auto",
    pointerEvents: "auto",
  }),
};

export default function Admit(props) {
  const { handleClosePopup } = props;
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [trainer, setTrainer] = useState("");
  const [mrnumber, setMrNumber] = useState("");
  const [incrementingNumber, setIncrementingNumber] = useState(0);
  const [types, setTypes] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [number, setNumber] = useState(0);
  const [img, setImg] = useState("");

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const randomHp = getRandomNumber();

  const handleCancelButtonClick = () => {
    handleClosePopup();
  };

  const handleSpeciesChange = (selectedOption) => {
    if (selectedOption) {
      setSpecies(selectedOption.label);
      setTypes(selectedOption.types);
      setHeight(selectedOption.height);
      setWeight(selectedOption.weight);
      setNumber(selectedOption.number);
      setImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedOption.number}.png`
      );
    } else {
      setSpecies("");
      setTypes("");
      setHeight("");
      setWeight("");
      setNumber(0);
      setImg("");
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

        <div>
        <div className="admit-label" id="admit-species">
            <label>Species: </label>
            <CustomSelect
              options={pokemonOptions}
              styles={colourStyles}
              value={pokemonOptions.find((option) => option.label === species)}
              onChange={handleSpeciesChange}
              placeholder="Search species..."
            />
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
