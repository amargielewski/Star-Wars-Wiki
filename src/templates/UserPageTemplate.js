import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-top: 80px;
`;

const UserPageTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;
