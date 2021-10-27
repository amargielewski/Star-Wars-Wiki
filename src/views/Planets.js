import React from "react";
import PlanetsList from "../components/PlanetsList/PlanetsList";
import MainTemplate from "../templates/MainTemplate";
import BoxTemplate from "../templates/BoxTemplate";

const Planets = () => {
  return (
    <MainTemplate>
      <BoxTemplate>
        <PlanetsList />
      </BoxTemplate>
    </MainTemplate>
  );
};

export default Planets;
