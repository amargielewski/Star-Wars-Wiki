import React from "react";

import styled from "styled-components";
import DetailsListItem from "../DetailsListItem/DetailsListItem";
import { paths } from "../../utils/paths";
import BackButton from "../BackButton/BackButton";

const StyledWrapper = styled.div`
  width: 400px;
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
      <BackButton to={paths.planets} siteName="Planets" />
      <DetailsListItem title="Planet name" value={name} />
      <DetailsListItem title="Rotation period" value={rotation_period} />
      <DetailsListItem title="Orbital Period" value={orbital_period} />
      <DetailsListItem title="Diameter" value={diameter} />
      <DetailsListItem title="Climate" value={climate} />
      <DetailsListItem title="Gravity" value={gravity} />
      <DetailsListItem title="Terrain" value={terrain} />
      <DetailsListItem title="Surface Water" value={surface_water} />
      <DetailsListItem title="Population" value={population} />
    </StyledWrapper>
  );
};

export default PlanetsDetails;
