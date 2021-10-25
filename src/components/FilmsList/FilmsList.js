import React from "react";
import useListLogic from "../../Hooks/useListLogic";
import SingleCharacterCard from "../SingleCharacterCard/SingleCharacterCard";

const FilmsList = () => {
  const {
    data: films,
    prevPage,
    nextPage,
    isLoading,
    canNextPage,
    canPrevPage,
  } = useListLogic("https://swapi.dev/api/films/");

  return (
    <>
      {films &&
        films.map((singleCharacter) => {
          const { title } = singleCharacter;
          return (
            <SingleCharacterCard name={title} key={title}></SingleCharacterCard>
          );
        })}
      <button onClick={prevPage} disabled={!canPrevPage}>
        {"<"}
      </button>
      <button onClick={nextPage} disabled={!canNextPage}>
        {">"}
      </button>
    </>
  );
};

export default FilmsList;
