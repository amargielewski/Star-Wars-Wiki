import React from "react";
import CharactersList from "../components/CharactersList/CharactersList";
import MainTemplate from "../templates/MainTemplate";

const Characters = () => {
  return (
    <MainTemplate>
      <div>Characters</div>
      <CharactersList />
    </MainTemplate>
  );
};

export default Characters;
