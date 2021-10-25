import useListLogic from "../../Hooks/useListLogic";
// import useFetch from "../../Hooks/useFetch";
// import styled from "styled-components";
import SingleCharacterCard from "../SingleCharacterCard/SingleCharacterCard";

const CharactersList = () => {
  const {
    data: characters,
    prevPage,
    nextPage,
    isLoading,
    canNextPage,
    canPrevPage,
  } = useListLogic("https://swapi.dev/api/people/");

  if (isLoading) return <div>ładuje dane</div>;

  return (
    <>
      {characters &&
        characters.map((singleCharacter) => {
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
    </>
  );
};

export default CharactersList;
