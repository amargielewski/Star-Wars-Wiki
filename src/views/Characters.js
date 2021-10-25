import React from "react";
import CharactersList from "../components/CharactersList/CharactersList";
import GridTemplate from "../templates/GridTemplate";
import MainTemplate from "../templates/MainTemplate";

const Characters = () => {
  return (
    <MainTemplate>
      <div>Characters</div>
      <GridTemplate>
        <CharactersList />
      </GridTemplate>
    </MainTemplate>
  );
};

export default Characters;
