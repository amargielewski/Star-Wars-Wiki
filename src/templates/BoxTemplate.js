import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoxTemplate = ({ children }) => {
  return <StyledBoxContainer>{children}</StyledBoxContainer>;
};

BoxTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxTemplate;
