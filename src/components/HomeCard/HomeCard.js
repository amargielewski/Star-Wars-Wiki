import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 20px 30px;
  margin: 0 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: black;
  background-color: #f9d71c;
  border-radius: 10px;

  :hover {
    transition: transform 0.15s linear;
    transform: scale(1.2);
    font-weight: 500;
    opacity: 0.8;
  }
`;

const HomeCard = ({ path, pathName }) => {
  return (
    <StyledWrapper as={Link} to={path}>
      {pathName}
    </StyledWrapper>
  );
};

export default HomeCard;
