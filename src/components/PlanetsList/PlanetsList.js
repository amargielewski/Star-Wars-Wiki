import React from "react";
import useListLogic from "../../Hooks/useListLogic";
import Card from "../Card/Card";
import styled from "styled-components";
import BoxTemplate from "../../templates/BoxTemplate";
import PageButton from "../PageButton/PageButton";
import { paths } from "../../utils/paths";
import LoadingBox from "../LoadingBox/LoadingBox";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

const PlanetsList = () => {
  const { data, prevPage, nextPage, isLoading, canNextPage, canPrevPage } =
    useListLogic("https://swapi.dev/api/planets/");

  if (!data) return <LoadingBox />;

  return (
    <StyledContainer>
      {isLoading && <LoadingBox />}
      <BoxTemplate>
        {data?.length > 0 &&
          data.map(({ name, id }) => (
            <Card path={paths.details("planets", id)} name={name} key={id} />
          ))}
      </BoxTemplate>
      {data?.length > 0 && (
        <StyledButtonContainer>
          <PageButton onClick={prevPage} disabled={!canPrevPage}>
            Prev Page
          </PageButton>

          <PageButton onClick={nextPage} disabled={!canNextPage}>
            Next Page
          </PageButton>
        </StyledButtonContainer>
      )}
    </StyledContainer>
  );
};

export default PlanetsList;
