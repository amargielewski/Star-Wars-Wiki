import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const StyledLoadingMsg = styled.h2`
  font-size: 70px;
  color: white;
  font-weight: 900;
`;

const LoadingBox = () => {
  return (
    <StyledWrapper>
      <StyledLoadingMsg>Loading...</StyledLoadingMsg>
    </StyledWrapper>
  );
};

export default LoadingBox;
