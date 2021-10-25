import React from "react";
import useListLogic from "../../Hooks/useListLogic";
import SingleCharacterCard from "../SingleCharacterCard/SingleCharacterCard";

const PlanetsList = () => {
  const {
    data: planets,
    prevPage,
    nextPage,
    isLoading,
    canNextPage,
    canPrevPage,
  } = useListLogic("https://swapi.dev/api/planets/");

  return (
    <div>
      {planets &&
        planets.map((singleCharacter) => {
          const { name } = singleCharacter;
          return (
            <SingleCharacterCard name={name} key={name}></SingleCharacterCard>
          );
        })}
      <button onClick={prevPage} disabled={!canPrevPage}>
        {"<"}
      </button>
      <button onClick={nextPage} disabled={!canNextPage}>
        {">"}
      </button>
    </div>
  );
};

export default PlanetsList;
