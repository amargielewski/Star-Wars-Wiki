import React from "react";
import CharactersList from "../components/CharactersList/CharactersList";
import BoxTemplate from "../templates/BoxTemplate";
import MainTemplate from "../templates/MainTemplate";

const Characters = () => {
  return (
    <MainTemplate>
      <BoxTemplate>
        <CharactersList />
      </BoxTemplate>
    </MainTemplate>
  );
};

export default Characters;
