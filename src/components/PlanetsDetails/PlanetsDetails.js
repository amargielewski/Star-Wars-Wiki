import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 700px;
`;

const PlanetsDetails = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
}) => {
  return (
    <StyledWrapper>
      <p>{name}</p>
      <p>{rotation_period}</p>
      <p>{orbital_period}</p>
      <p>{diameter}</p>
      <p>{climate}</p>
      <p>{gravity}</p>
      <p>{terrain}</p>
      <p>{surface_water}</p>
      <p>{population}</p>
    </StyledWrapper>
  );
};

export default PlanetsDetails;
