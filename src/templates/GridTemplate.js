import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
`;

const GridTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default GridTemplate;
