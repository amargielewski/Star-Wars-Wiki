import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: #f9d71c;
  color: black;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;

  :hover {
    transition: transform 0.15s linear;
    transform: scale(1.2);
    font-weight: 400;
  }

  :disabled {
    opacity: 0.2;
    :hover {
      transition: none;
      transform: none;
    }
  }
`;

const PageButton = ({ children, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

PageButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PageButton;
