import React from "react";
import useListLogic from "../../Hooks/useListLogic";
import Card from "../Card/Card";
import styled from "styled-components";
import PageButton from "../PageButton/PageButton";
import BoxTemplate from "../../templates/BoxTemplate";
import { paths } from "../../utils/paths";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

const FilmsList = () => {
  const {
    data,
    prevPage,
    nextPage,
    // isLoading,
    canNextPage,
    canPrevPage,
  } = useListLogic("https://swapi.dev/api/films/");

  return (
    <StyledContainer>
      <BoxTemplate>
        {data &&
          data.map(({ title, id }) => (
            <Card path={paths.details("films", id)} name={title} key={title} />
          ))}
      </BoxTemplate>
      <StyledButtonContainer>
        <PageButton onClick={prevPage} disabled={!canPrevPage}>
          Prev Page
        </PageButton>

        <PageButton onClick={nextPage} disabled={!canNextPage}>
          Next Page
        </PageButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default FilmsList;
