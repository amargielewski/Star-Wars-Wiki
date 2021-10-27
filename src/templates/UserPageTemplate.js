import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

const UserPageTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;
