import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
