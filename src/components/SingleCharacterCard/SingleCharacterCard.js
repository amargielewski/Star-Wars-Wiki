import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 10px 20px;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;

  :hover {
    background-color: lightgray;
    transform: translateY(-10px);
  }
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
