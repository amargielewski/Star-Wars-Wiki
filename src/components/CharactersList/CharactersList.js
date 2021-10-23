import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import SingleCharacterCard from "../SingleCharacterCard/SingleCharacterCard";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for thar resource");
        }
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        console.log(data.results);
      });
  }, []);

  return characters.map((single) => {
    const { name } = single;
    return <SingleCharacterCard name={name} key={name}></SingleCharacterCard>;
  });
};

export default CharactersList;
