import useListLogic from "../../Hooks/useListLogic";
import styled from "styled-components";
import Card from "../Card/Card";
import BoxTemplate from "../../templates/BoxTemplate";
import PageButton from "../PageButton/PageButton";
import LoadingBox from "../LoadingBox/LoadingBox";
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

const CharactersList = () => {
  const { data, prevPage, nextPage, isLoading, canNextPage, canPrevPage } =
    useListLogic("https://swapi.dev/api/people/");

  if (isLoading) return <LoadingBox />;

  return (
    <StyledContainer>
      {isLoading && <LoadingBox />}
      <BoxTemplate>
        {data?.length > 0 &&
          data.map(({ name, id }) => (
            <Card path={paths.details("people", id)} name={name} key={id} />
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

export default CharactersList;
