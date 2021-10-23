import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 10px 20px;
  width: 300px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledName = styled.h2``;

const SingleCharacterCard = ({ name }) => {
  return (
    <StyledWrapper>
      <StyledName>{name}</StyledName>
    </StyledWrapper>
  );
};

export default SingleCharacterCard;
