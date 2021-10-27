import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: #fff595;
  color: #25292e;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;

  :disabled {
    opacity: 0.3;
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
