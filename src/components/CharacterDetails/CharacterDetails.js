import React from "react";
import styled from "styled-components";
import { paths } from "../../utils/paths";
import BackButton from "../BackButton/BackButton";
import DetailsListItem from "../DetailsListItem/DetailsListItem";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterDetails = ({
  name,
  height,
  mass,
  hair_color,
  birth_year,
  gender,
  eye_color,
}) => {
  return (
    <StyledWrapper>
      <BackButton to={paths.characters} siteName="Characters" />
      <DetailsListItem title="Name" value={name} />
      <DetailsListItem title="Height" value={height} />
      <DetailsListItem title="Mass" value={mass} />
      <DetailsListItem title="Hair color" value={hair_color} />
      <DetailsListItem title="Birth year" value={birth_year} />
      <DetailsListItem title="Gender" value={gender} />
      <DetailsListItem title="Eye color" value={eye_color} />
    </StyledWrapper>
  );
};

export default CharacterDetails;
