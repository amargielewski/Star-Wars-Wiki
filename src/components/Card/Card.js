import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 10px 20px;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  text-decoration: none;
  background-color: #f9d71c;

  :hover {
    background-color: #fffecf;

    transition: transform 0.15s linear;
    transform: scale(1.05);
  }
`;

const StyledName = styled.h2`
  font-size: 30px;
  color: black;
`;

const Card = ({ name, path }) => {
  return (
    <StyledWrapper as={Link} to={path}>
      <StyledName>{name}</StyledName>
    </StyledWrapper>
  );
};

Card.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Card;
