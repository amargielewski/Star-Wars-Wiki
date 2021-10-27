import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: #f9d71c;
  width: 200px;
  text-align: center;
  text-decoration: none;
  border: 1px solid black;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

const BackButton = ({ to, siteName }) => {
  return <StyledLink to={to}>Back to {siteName}</StyledLink>;
};

export default BackButton;
