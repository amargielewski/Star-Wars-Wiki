import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`;

const MainTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainTemplate;
