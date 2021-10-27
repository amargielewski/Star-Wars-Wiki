import React from "react";
import PlanetsList from "../components/PlanetsList/PlanetsList";
import MainTemplate from "../templates/MainTemplate";
import BoxTemplate from "../templates/BoxTemplate";

const Planets = () => {
  return (
    <MainTemplate>
      <div>Planets</div>
      <BoxTemplate>
        <PlanetsList />
      </BoxTemplate>
    </MainTemplate>
  );
};

export default Planets;
